#!/usr/bin/env python3
"""Audita se cada etapa de uma aula UEMG cabe nos viewports suportados.

Arquitetura:
- uma cópia temporária da aula, sem alterar o HTML original;
- um servidor HTTP em porta dinâmica, com cleanup garantido;
- UMA execução do Chrome por viewport (não uma por etapa);
- medição de todas as etapas no mesmo DOM, após fontes/imagens estabilizarem;
- relatório humano e JSON com causas de overflow.

Uso:
  python3 scripts/medir_etapas.py URL
  python3 scripts/medir_etapas.py URL --viewport 1366x768 --viewport 375x667
  python3 scripts/medir_etapas.py URL --json --output /tmp/medidas.json

Exit: 0 passou; 1 overflow/erro de render; 2 configuração inválida.
"""
from __future__ import annotations

import argparse
import contextlib
import html as html_lib
import http.server
import json
from pathlib import Path
import re
import shutil
import socketserver
import subprocess
import sys
import tempfile
import threading
from typing import Any
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen

MEDIDOR_JS = r"""
<script id="medidor-etapas">
window.addEventListener('load', async function () {
  const esperarImagens = Array.from(document.images).map(function (img) {
    if (img.complete) return Promise.resolve();
    return new Promise(function (resolve) {
      img.addEventListener('load', resolve, { once: true });
      img.addEventListener('error', resolve, { once: true });
    });
  });
  await Promise.all([
    document.fonts ? document.fonts.ready : Promise.resolve(),
    ...esperarImagens
  ]);

  const etapas = Array.from(document.querySelectorAll('section.etapa[data-etapa]'));
  const player = document.querySelector('.player');
  const nav = document.querySelector('.player-nav');
  const tolerancia = 2;

  const caixa = function (el) {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      top: Math.round(r.top), right: Math.round(r.right),
      bottom: Math.round(r.bottom), left: Math.round(r.left),
      width: Math.round(r.width), height: Math.round(r.height),
      clientWidth: el.clientWidth, clientHeight: el.clientHeight,
      scrollWidth: el.scrollWidth, scrollHeight: el.scrollHeight
    };
  };

  const resultados = [];
  for (let i = 0; i < etapas.length; i += 1) {
    etapas.forEach(function (etapa, indice) {
      const ativa = indice === i;
      etapa.classList.toggle('ativa', ativa);
      etapa.hidden = !ativa;
      etapa.setAttribute('aria-hidden', ativa ? 'false' : 'true');
    });
    // Força style/layout sincronamente na etapa atual.
    void etapas[i].offsetHeight;

    const etapa = etapas[i];
    const grid = etapa.querySelector('.etapa-grid');
    const texto = etapa.querySelector('.etapa-texto');
    const visual = etapa.querySelector('.etapa-visual');
    const etapaBox = caixa(etapa);
    const bodyPermiteRolagem = getComputedStyle(document.body).overflowY !== 'hidden';
    const bodyVertical = bodyPermiteRolagem && document.documentElement.scrollHeight > innerHeight + tolerancia;
    const bodyHorizontal = document.documentElement.scrollWidth > innerWidth + tolerancia;
    const etapaVertical = etapa.scrollHeight > etapa.clientHeight + tolerancia;
    const etapaHorizontal = etapa.scrollWidth > etapa.clientWidth + tolerancia;
    const navCortada = nav ? nav.getBoundingClientRect().bottom > innerHeight + tolerancia : false;
    const etapaRect = etapa.getBoundingClientRect();
    const descendantOverflows = Array.from(etapa.querySelectorAll('*'))
      .filter(function (el) {
        const rect = el.getBoundingClientRect();
        return el.scrollWidth > el.clientWidth + tolerancia ||
          rect.left < etapaRect.left - tolerancia || rect.right > etapaRect.right + tolerancia;
      })
      .map(function (el) {
        const rect = el.getBoundingClientRect();
        return {
          tag: el.tagName.toLowerCase(), id: el.id || null,
          className: typeof el.className === 'string' ? el.className : null,
          clientWidth: el.clientWidth, scrollWidth: el.scrollWidth,
          left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width)
        };
      })
      .slice(0, 12);

    resultados.push({
      etapa: i + 1,
      dataEtapa: etapa.dataset.etapa || null,
      overflow: bodyVertical || bodyHorizontal || etapaVertical || etapaHorizontal || navCortada,
      bodyVertical, bodyHorizontal, etapaVertical, etapaHorizontal, navCortada,
      etapaBox,
      playerBox: caixa(player), navBox: caixa(nav), gridBox: caixa(grid),
      textoBox: caixa(texto), visualBox: caixa(visual), descendantOverflows
    });
  }

  // Restaura primeira etapa para a cópia renderizada.
  etapas.forEach(function (etapa, indice) {
    const ativa = indice === 0;
    etapa.classList.toggle('ativa', ativa);
    etapa.hidden = !ativa;
    etapa.setAttribute('aria-hidden', ativa ? 'false' : 'true');
  });
  document.title = 'MEDIDAS:' + JSON.stringify({
    viewport: { width: innerWidth, height: innerHeight },
    resultados
  });
});
</script>
"""

class ServidorSilencioso(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format: str, *args: object) -> None:
        del format, args

class Servidor(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True

def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('url')
    p.add_argument('--viewport', action='append', default=[], metavar='LARGURAxALTURA')
    p.add_argument('--chrome')
    p.add_argument('--timeout', type=int, default=60)
    p.add_argument('--json', action='store_true')
    p.add_argument('--output', type=Path)
    return p.parse_args()

def chrome_path(explicito: str | None) -> str:
    for candidato in [explicito, shutil.which('google-chrome-stable'), shutil.which('google-chrome'), shutil.which('chromium')]:
        if candidato and Path(candidato).exists():
            return str(Path(candidato).resolve())
    raise RuntimeError('Chrome/Chromium não encontrado')

def viewport(valor: str) -> tuple[int, int]:
    m = re.fullmatch(r'(\d{3,5})[x,](\d{3,5})', valor.strip().lower())
    if not m:
        raise ValueError(f'viewport inválido: {valor}; use 1366x768')
    w, h = map(int, m.groups())
    if w < 320 or h < 480:
        raise ValueError(f'viewport abaixo do mínimo suportado: {valor}')
    return w, h

def buscar(url: str) -> str:
    with urlopen(Request(url, headers={'User-Agent': 'UEMG-Fit-Audit/2.0'}), timeout=30) as r:
        return r.read().decode(r.headers.get_content_charset() or 'utf-8')

def preparar(original: str, origem: str) -> tuple[str, int]:
    total = len(re.findall(r'<section\b[^>]*class="[^"]*\betapa\b[^"]*"', original, re.I))
    if not total:
        raise RuntimeError('nenhuma section.etapa encontrada')
    html = re.sub(
        r'\b(href|src)="/(?!/)([^"]+)"',
        lambda m: f'{m.group(1)}="{urljoin(origem + "/", m.group(2))}"',
        original,
    )
    if not re.search(r'</body>', html, re.I):
        raise RuntimeError('HTML sem </body>')
    html = re.sub(r'</body>', MEDIDOR_JS + '\n</body>', html, count=1, flags=re.I)
    return html, total

@contextlib.contextmanager
def servidor_em(diretorio: Path):
    handler = lambda *a, **kw: ServidorSilencioso(*a, directory=str(diretorio), **kw)
    srv = Servidor(('127.0.0.1', 0), handler)
    thread = threading.Thread(target=srv.serve_forever, daemon=True)
    thread.start()
    try:
        yield srv.server_address[1]
    finally:
        srv.shutdown(); srv.server_close(); thread.join(timeout=2)

def renderizar(chrome: str, porta: int, tamanho: tuple[int, int], timeout: int, raiz: Path) -> dict[str, Any]:
    w, h = tamanho
    perfil = raiz / f'perfil-{w}x{h}'
    perfil.mkdir()

    def executar(janela: tuple[int, int]) -> dict[str, Any]:
        cmd = [
            chrome, '--headless=new', '--disable-gpu', '--no-sandbox',
            '--disable-dev-shm-usage', '--disable-background-networking',
            '--disable-component-update', '--disable-default-apps', '--no-first-run',
            '--force-device-scale-factor=1', f'--user-data-dir={perfil}',
            f'--window-size={janela[0]},{janela[1]}', '--virtual-time-budget=5000', '--dump-dom',
            f'http://127.0.0.1:{porta}/aula.html'
        ]
        try:
            proc = subprocess.run(cmd, capture_output=True, text=True, timeout=timeout)
        except subprocess.TimeoutExpired as erro:
            return {'erro': f'Chrome excedeu {timeout}s', 'stderr': str(erro.stderr or '')[-600:]}
        if proc.returncode:
            return {'erro': f'Chrome saiu com código {proc.returncode}', 'stderr': proc.stderr[-600:]}
        m = re.search(r'<title>MEDIDAS:(.*?)</title>', proc.stdout, re.S)
        if not m:
            return {'erro': 'medidas ausentes no title', 'stderr': proc.stderr[-600:]}
        try:
            return json.loads(html_lib.unescape(m.group(1)))
        except json.JSONDecodeError as erro:
            return {'erro': f'JSON inválido: {erro}', 'payload': m.group(1)[:600]}

    dados = executar((w, h))
    if dados.get('erro'):
        return dados
    real = dados.get('viewport', {})
    delta_w = w - int(real.get('width', w))
    delta_h = h - int(real.get('height', h))
    if delta_w or delta_h:
        dados = executar((w + delta_w, h + delta_h))
        if not dados.get('erro'):
            dados['janelaAjustada'] = {'width': w + delta_w, 'height': h + delta_h}
    return dados

def resumo_humano(relatorio: dict[str, Any]) -> None:
    print(f"Aula: {relatorio['url']}")
    print(f"Etapas: {relatorio['totalEtapas']} · Chrome: {relatorio['chrome']}")
    for rodada in relatorio['viewports']:
        print(f"\nViewport pedido {rodada['pedido']} · interno real {rodada.get('real', 'desconhecido')}")
        if rodada.get('erro'):
            print('ERRO:', rodada['erro']); continue
        for item in rodada['resultados']:
            if item['overflow']:
                causas = [k for k in ('bodyVertical','bodyHorizontal','etapaVertical','etapaHorizontal','navCortada') if item[k]]
                box = item['etapaBox']
                print(f"  {item['etapa']:>3}: OVERFLOW ({', '.join(causas)}) client={box['clientHeight']} scroll={box['scrollHeight']}")
        print(f"FIT: {rodada['fit']}/{relatorio['totalEtapas']}" + (f" · corrigir: {rodada['problemas']}" if rodada['problemas'] else ''))
    print('\nRESULTADO:', 'PASSOU' if relatorio['passou'] else 'FALHOU')

def main() -> int:
    args = parse_args()
    try:
        navegador = chrome_path(args.chrome)
        tamanhos = [viewport(v) for v in args.viewport] or [(1366,768),(375,667)]
        u = urlparse(args.url)
        if u.scheme not in {'http','https'} or not u.netloc:
            raise ValueError('URL inválida')
        origem = f'{u.scheme}://{u.netloc}'
        html, total = preparar(buscar(args.url), origem)
    except Exception as erro:
        print(f'erro de configuração: {erro}', file=sys.stderr); return 2

    relatorio: dict[str, Any] = {'url': args.url, 'chrome': navegador, 'totalEtapas': total, 'viewports': [], 'passou': True}
    with tempfile.TemporaryDirectory(prefix='uemg-fit-') as tmp:
        raiz = Path(tmp); (raiz/'aula.html').write_text(html, encoding='utf-8')
        with servidor_em(raiz) as porta:
            for tam in tamanhos:
                dados = renderizar(navegador, porta, tam, args.timeout, raiz)
                rodada: dict[str, Any] = {'pedido': f'{tam[0]}x{tam[1]}'}
                if dados.get('erro'):
                    rodada.update(dados); rodada.update({'fit':0,'problemas':list(range(1,total+1))})
                    relatorio['passou'] = False
                else:
                    resultados = dados['resultados']
                    problemas = [x['etapa'] for x in resultados if x['overflow']]
                    rodada.update({
                        'real': f"{dados['viewport']['width']}x{dados['viewport']['height']}",
                        'fit': total-len(problemas), 'problemas': problemas, 'resultados': resultados
                    })
                    if problemas: relatorio['passou'] = False
                relatorio['viewports'].append(rodada)

    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(json.dumps(relatorio, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps(relatorio, ensure_ascii=False, indent=2) if args.json else '', end='') if args.json else resumo_humano(relatorio)
    return 0 if relatorio['passou'] else 1

if __name__ == '__main__':
    raise SystemExit(main())
