# Instruções do Projeto - Inclusão Digital 60+ UEMG Frutal

## Sobre o Projeto

Programa de extensão universitária que ensina tecnologia para pessoas 60+ usando metodologia andragógica. O repositório contém:

- `portal/` - Site de apoio aos alunos (Vite + Vanilla JS)
- `AULAS/` - PDFs das aulas do programa
- `DOCS/` - Documentação, cronogramas e especificações

## Convenções de Código

### Portal Web
- **Manter simplicidade**: HTML/CSS/JS puro, sem frameworks
- Build com Vite, deploy na Vercel via GitHub Actions
- Priorizar acessibilidade: fontes grandes, alto contraste, botões amplos
- Interface intuitiva para usuários 60+

### Nomeação de Arquivos
- Usar snake_case em português: `aula_01.pdf`, `cronograma_final.md`
- PDFs de aulas: `aula_XX.pdf` (XX = número com dois dígitos)

## Git

### Commits
- Formato: conventional commits em inglês + descrição em português
- Exemplos:
  - `feat: adiciona exercícios interativos na aula 05`
  - `fix: corrige contraste de cores no botão principal`
  - `docs: atualiza cronograma com novas datas`

### Workflow
- Mudanças pequenas: commit direto na main
- Mudanças maiores: criar feature branch e fazer merge

## Materiais Didáticos

- Pipeline: PowerPoint/Slides → Markdown → HTML (quando necessário)
- Linguagem clara e acessível
- Seguir princípios andragógicos (conectar com experiências de vida, resolver problemas reais)

## Restrições Importantes

**NUNCA fazer sem confirmação explícita:**

1. Deletar arquivos da pasta `AULAS/`
2. Adicionar componentes UI complexos ao portal
3. Usar frameworks JS (React, Vue, Angular, etc.)

## Comunicação

- Idioma: português brasileiro
- Estilo: técnico mas com contexto quando necessário
- Termos técnicos em inglês são aceitáveis quando não há tradução adequada

## Redesign e assets

- `SPEC.md` (raiz) é a especificação autoritativa do redesenho (mundo "Ateliê de Autonomia", roadmap de trilhas, formulário de sugestão). `PRODUCT.md`/`DESIGN.md` mantêm a verdade atual do produto.
- Propostas reais das trilhas futuras: `.next_steps/trilhas_programa_inclusao_digital.html` (não inventar; é a fonte).
- Assets gerados (evidência do SPEC): `public/assets/ilustracoes/rebuild_2026/`; prompts em `art/prompts/rebuild_2026/`; ledger em `art/provenance/rebuild_2026-assets.json`.
- Imagem só gera cena/ambiente/sujeito/textura. UI, texto, números, logos e certificados ficam em HTML/CSS/SVG.

## Ambiente de build e ferramentas de agente

- Dev/preview: rode `portless run npx vite` (não `portless run npm run dev`, que esconde o Vite e não recebe `--port`). Nunca cite portas numéricas em docs/reviews.
- Geração de imagem (Azure OpenAI v1 / `gpt-image-2` via `image_generate`): em janela medida (2026-08-16) só `quality=low` completou; `medium`/`high` estouraram timeout de rede, e o helper não aceita imagem de referência (sem image-to-image). Gere por texto. Ver ledger em `art/provenance/`.
- `/tmp` é tmpfs e pode chegar a 100%. Direcione temporários para `/var/tmp`. Para `chrome-devtools-axi`: `TMPDIR=/var/tmp`, `CHROME_DEVTOOLS_AXI_USER_DATA_DIR` em `/var/tmp`, e `CHROME_DEVTOOLS_AXI_CHROME_ARGS=--ignore-certificate-errors` (CA do portless).

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
