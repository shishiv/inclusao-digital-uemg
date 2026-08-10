# 🗺️ WAYFINDER MAP — Conversão das Aulas em Interativas

**Destino:** As 8 aulas da trilha 60+ (01, 02, 04, 05, 06, 07, 08) convertidas em
aulas interativas densas no padrão da Aula 03 — cada uma cobrindo TODO o conteúdo do
seu PDF, com simuladores, quizzes, tooltips de vocabulário e o "momento eu consigo".
(Aula 03 já está feita como referência; Aula 09 é celebração, fora deste escopo.)

**Status:** MAPA DE EXECUÇÃO — este documento é o contrato que todo subagente segue.
Cada aula é uma "ticket" resolvida por um subagente que entrega o arquivo `aula_XX.html`.

---

## 1. REGRAS DO JOGO (leia primeiro)

1. **Fonte do conteúdo:** o PDF da aula em `public/aulas/aula_XX.pdf` (extrair com
   `pdftotext -layout`). A aula interativa DEVE cobrir **todo** o conteúdo do PDF —
   nada de resumir. Densidade >= PDF.
2. **Padrão de referência:** `public/aulas/aula_03.html` é o padrão-ouro. Copie a
   estrutura (etapas, badges de fase, analogias, mockups, quizzes, missão, celebração).
3. **Player compartilhado:** NÃO embuta CSS/JS. Use:
   - `<link rel="stylesheet" href="/assets/player.css">` no `<head>`
   - `<script src="/assets/player-base.js"></script>` antes do seu script
   - O script inline da aula contém APENAS a lógica específica (simuladores, formulários)
4. **Etapas:** use `<section class="etapa" data-etapa="N">` sequencial. Uma etapa por
   seção do PDF. Aula 03 tem 16 etapas — use densidade parecida (12-20 etapas).
5. **Fases andragógicas (badges):** `f1` Por que importa · `f2` Vamos juntos ·
   `f3` Sua vez · `f4` Na vida real · `f5` Momento eu consigo.
   Distribua as etapas nas 5 fases conforme o ciclo.
6. **Pré-requisitos (COESÃO — obrigatório):** consulte
   `SEMINARIO/DOCS/Coesao_Trilha_Matriz_Prerequisitos.md`. Todo termo técnico usado
   sem ter sido ensinado antes na trilha vira `<span class="termo">` com tooltip.
   Termos do Nível 1-2 (conta, senha, app, loja, instalar, ícone, contato, agenda)
   já foram introduzidos nas aulas 01-03 — podem ser usados com tooltip curto.
7. **Sem vitimizar:** tom de empoderamento, nunca tratar o idoso como coitado.
8. **Erro sem culpa:** feedback de quiz explica o que fazer, nunca julga.

## 2. CHECKLIST DE QUALIDADE (aceite)

- [ ] Arquivo `public/aulas/aula_XX.html` criado, servindo 200 no preview
- [ ] Cobre TODO o conteúdo do PDF (conferir seção a seção)
- [ ] Usa player.css + player-base.js (sem CSS/JS embutidos além do específico)
- [ ] 12-20 etapas com data-etapa sequencial
- [ ] Todas as 5 fases representadas
- [ ] Pelo menos 1 interação real (simulador, quiz com feedback, formulário)
- [ ] Pelo menos 2 quizzes de decisão com data-feedback (se o tema permitir)
- [ ] Termos novos com tooltip `.termo`
- [ ] Ilustração de capa da aula usada na Fase 1 (se existir em `/assets/ilustracoes/`)
- [ ] `npm run build` passa sem erro
- [ ] HTML válido (tags fechadas, sem caracteres quebrados)

## 3. ASSETS DISPONÍVEIS POR AULA (em `public/assets/ilustracoes/`)

| Aula | Capa 16x9 | Outros |
|---|---|---|
| 01 | `aula01-fundamentos-bg-16x9-v01.png` | — |
| 02 | `aula02-navegacao-bg-16x9-v01.png` | — |
| 04 | `aula04-midias-sociais-bg-16x9-v01.png` | — |
| 05 | `aula05-bau-memorias-bg-16x9-v01.png` | — |
| 06 | `aula06-escritorio-bg-16x9-v01.png` | — |
| 07 | `aula07-slides-bg-16x9-v01.png` | — |
| 08 | `aula08-govbr-pix-bg-16x9-v01.png` | — |

Avatares reutilizáveis: `avatar-vo-dona-zilda-1x1-v01.png`, `avatar-vo-seu-jose-1x1-v01.png`.
Texturas: `textura-chita-floral-bg-16x9-v01.png`, `textura-chita-azul-bg-16x9-v01.png`,
`textura-chita-verde-bg-16x9-v01.png`.

## 4. DECISÕES JÁ TOMADAS (não reabrir)

- **Direção visual:** Colcha de Retalhos (chita, costura, algodão cru) — tokens em
  `src/style.css` e `public/assets/player.css`; DESIGN.md documenta o mundo.
- **Player:** etapas guiadas, uma por tela, barra de progresso, Anterior/Próximo,
  teclado ←/→, tooltips hover+toque. Nada de slides fullscreen.
- **Navegação validada em protótipo (2026-08):** direção **A — botões nos cantos**.
  Anterior/Próximo usam círculos de 58px, rótulos em
  hover/foco (persistentes em touch), `aria-label` e zona segura no celular. A barra
  inferior larga foi removida para devolver altura ao conteúdo; a contagem permanece
  na barra de progresso superior, sem duplicação visual no rodapé.
- **UX — UMA ETAPA = UMA TELA (diretriz do captain, 2026-08):** a página NUNCA rola
  (`body { height: 100dvh; overflow: hidden }`). Cada etapa ocupa o viewport inteiro
  (`player` com `height: calc(100dvh - 96px)`, etapa `flex:1` com scroll interno só
  como fallback). Em desktop, etapas com visual usam `.etapa-grid` (2 colunas:
  texto à esquerda, mockup/imagem à direita em `.etapa-visual`). No celular
  (`≤900px`), colapsa para 1 coluna com o visual em cima (`order: -1`) e fontes
  menores — NUNCA rolar a página para ver o conteúdo.
- **Imagens do que é cada coisa (diretriz do captain):** cada ferramenta/conceito
  identificável tem LOGO REAL (`/assets/logos/` — chrome, docs, drive, gmail,
  photos, sheets, slides, whatsapp, youtube, facebook, instagram, playstore,
  govbr, pix) exibido como chip `.ferramenta` no primeiro uso; conceitos de
  interface (barra de endereços, cadeado, célula, QR Code...) são mostrados com
  mockup/imagem real na etapa de definição, nunca só texto.
- **Gate Impeccable `layout` + `adapt` (diretriz do captain):** antes de concluir
  cada aula, ler `~/.agents/skills/impeccable/reference/layout.md`, `adapt.md` e
  `craft-floor.md`. Fazer assessment isolado dos cinco eixos (ordem de leitura,
  agrupamento, ritmo, estrutura e densidade) e da adaptação em mobile/tablet/
  desktop, touch/pointer e extremos. A meta não é apenas “caber”: desktop deve
  usar o espaço para mostrar relações em paralelo; mobile deve reordenar e usar
  divulgação progressiva sem esconder funcionalidade. Rodar `detect.mjs` uma vez
  no final e medir todas as etapas em 1366×768 e 375×667.
- **PDFs:** material do monitor (link discreto sob o botão "Aula Interativa").
- **Quizzes:** genéricos via player-base.js usando `data-feedback-correct/wrong`
  nos botões corretos; feedback por `[data-feedback="N"]`.
- **Mockups:** SEMPRE em HTML/CSS (nunca screenshots reais). Avatares gerados como
  imagens redondas nos simuladores.
- **Aula 03** é a referência de conteúdo; o layout de tela cheia vale para todas.

## 5. MAPA DAS TICKETS (estado)

| Ticket | Status | Subagente |
|---|---|---|
| Aula 01 — Sua Jornada Começa Aqui (computador + Gmail + conta/senha) | ✅ feita (16 etapas) | deleg_c0cacd4e/task-0 |
| Aula 02 — Navegando com Segurança (navegador, sites seguros, celular/apps) | ✅ feita (16 etapas) | deleg_c0cacd4e/task-1 |
| Aula 03 — WhatsApp (REFERÊNCIA) | ✅ feita | — |
| Aula 04 — Mídias Sociais (Facebook, Instagram, YouTube, perfil) | ✅ feita (16 etapas) | deleg_c0cacd4e/task-2 |
| Aula 05 — Baú Digital (Drive, Fotos, nuvem, upload) | ✅ feita (17 etapas) | deleg_451f0976/task-0 |
| Aula 06 — Escritório Digital (Docs, Sheets, células, =SOMA) | ✅ feita (19 etapas) | deleg_451f0976/task-1 |
| Aula 07 — Google Slides (temas, slides, apresentar) | ✅ feita (17 etapas) | deleg_451f0976/task-2 |
| Aula 08 — Gov.br e PIX (níveis, chaves, QR Code, golpes) | ✅ feita (16 etapas) | deleg_94a68596 |

**PASSE DE UX (ondas 4-5 — em andamento):** todas as 8 aulas convertidas do layout
vertical para **UMA ETAPA = UMA TELA** com `.etapa-grid` (2 colunas desktop,
1 coluna mobile) e imagens/logos reais de reconhecimento.
- Onda 4 (aulas 01, 02, 03): 🔄 em execução — deleg_d7c1fa47
- Onda 5 (aulas 04, 05, 06, 07, 08): ⏳ aguardando a onda 4
Depois deste passe, a coluna "Etapas" reflete o layout de tela cheia.

## 6. CONTEÚDO-CHAVE POR AULA (resumo do PDF — detalhe no PDF)

- **01:** partes do computador (casa digital), ligar/desligar, navegador (ônibus),
  Gmail (correio), criar conta → **definir conta e senha como conceito**.
- **02:** URL/cadeado, sites suspeitos, links patrocinados, fake news, golpes,
  compras online, Google Maps → **introduzir app/loja/instalar/ícone/Wi-Fi/dados**
  (correção de ordem da matriz de coesão).
- **04:** o que são redes sociais, Facebook (álbum), Instagram (vitrine), YouTube
  (TV), privacidade, contas falsas → **definir perfil/postar/seguir/curtir**.
- **05:** Drive (armário), pastas (gavetas), upload, compartilhar, Fotos (álbum),
  backup, liberar espaço → **definir nuvem/login/upload/backup/link**.
- **06:** Docs (máquina de escrever), Sheets (caderno quadriculado), células,
  =SOMA, compartilhar ver/editar → **definir nuvem/célula/fórmula**.
- **07:** Slides (álbum de figurinhas), temas, inserir imagem/texto, apresentar,
  compartilhar → **definir aba/menu Inserir**.
- **08:** Gov.br (molho de chaves), níveis Bronze/Prata/Ouro, PIX (teletransporte),
  chaves (CPF/celular/e-mail), QR Code, golpes (parente falso, link falso),
  PARE-PENSE-LIGUE → **definir QR Code/biometria**.

## 7. COMANDOS ÚTEIS

```bash
# Extrair conteúdo do PDF
pdftotext -layout public/aulas/aula_XX.pdf /tmp/aula_XX.txt

# Build de verificação
cd /home/shiv/workspace/inclusao-digital-uemg && npm run build

# Preview (já roda em background na porta 4173)
# Testar: curl -s -o /dev/null -w "%{http_code}" http://localhost:4173/aulas/aula_XX.html
```

**NÃO commitar. NÃO tocar em outros arquivos além da sua aula.**
