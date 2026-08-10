# DESIGN.md — Programa de Inclusão Digital UEMG (Portal do Aluno)

<!-- impeccable:design-schema 1 -->

Data da build: agosto 2026 · Mundo: **Colcha de Retalhos** (direção atribuída pelo dado, seed `inclusao-uemg-roll-01`, candidato 6 da lista grounded)

## Mundo Visual

O portal é uma colcha que o aluno costura aula a aula. Cada aula concluída = um retalho
costurado na colcha da sua vida digital. O objeto da casa da avó brasileira (colcha de
retalhos de chita) carrega o mecanismo do produto: progresso visível, cuidado, paciência,
erro sem culpa (costura se desfaz e refaz).

### Paleta (chita sobre algodão cru)

| Token | Valor | Papel |
|---|---|---|
| `--algodao` | `#FAF6EC` | Fundo da página (algodão cru) |
| `--algodao-escuro` | `#F1EADA` | Superfície rebaixada, trilho de progresso |
| `--retalho` | `#FFFDF7` | Cards (retalhos claros) |
| `--chita-vermelha` | `#B5372C` | Primário de ação (botões principais) |
| `--chita-vermelha-escura` | `#93281F` | Hover do primário |
| `--chita-amarela` | `#E9B44C` | Acento (etiquetas, destaques, números) |
| `--chita-amarela-bg` | `#FBF0D6` | Fundo de analogias |
| `--chita-verde` | `#4E7D4A` | Sucesso, conclusão, "momento eu consigo" |
| `--chita-verde-bg` | `#E9F0E4` | Fundo de conquistas |
| `--chita-azul` | `#3E6C9E` | Âncora institucional UEMG (links, tooltips) |
| `--chita-azul-bg` | `#E3ECF5` | Fundo de destaques |
| `--chita-azul-escura` | `#1E4466` | Sidebar, footer, page-header |
| `--linha` / `--linha-forte` | `#C9BCA4` / `#A8987E` | Bordas de costura |
| `--bordado` | `#4A3B2A` | Texto principal (tom de terra, não cinza) |
| `--bordado-suave` | `#7A6B55` | Texto secundário |

Estratégia de cor: **Committed** — vermelho chita carrega as ações; azul UEMG âncora a
confiança institucional; amarelo/verde pontuam estados.

### Tipografia

| Papel | Fonte | Justificativa |
|---|---|---|
| Display/títulos | **Kalam** (700) | Letra de caderno — a "letra da vovó" nos retalhos; personalidade do mundo |
| Corpo | **Open Sans** | Legibilidade 60+ (decisão de acessibilidade, não estética); escolha documentada no PRODUCT.md |

Escala: 15px–54px; conteúdo de aula nunca abaixo de 18px (`--texto-base: 1.15rem`).

### Materiais e texturas

- **Trama de tecido**: `--trama` (repeating-linear-gradient sutil) aplicada em body,
  sidebar e footer — o algodão cru.
- **Linha de costura**: bordas `2px dashed` em cards, divisores e molduras; zigue-zague
  decorativo (`--costura-decorativa`) em seções.
- **Etiquetas de tecido**: badges `.etiqueta` com ponta à direita (como etiqueta de roupa).
- **Retalhos**: `.retalho` — quadrados coloridos com leve sombra; estados: costurado
  (cor sólida + check), futuro (tracejado + "?").
- **Ilustrações geradas** (Azure gpt-image-2 via skill tec-image): hero da colcha,
  avó em videochamada, textura de chita seamless. Nomeação tec-image
  `<surface>-<sujeito>-<papel>-<proporcao>-v01` em `public/assets/ilustracoes/`.

## Componentes

| Componente | Descrição |
|---|---|
| Sidebar | Azul profundo com trama, borda amarela, logo + título, trilhas "em breve"; off-canvas mobile |
| `.btn` | Alvos ≥56px, pill, `scale(0.97)` no active; variantes primária/verde/amarela/secundária |
| `.etiqueta` | Badge etiqueta de tecido (amarela/vermelha/verde/azul) |
| `.colcha` | Grid 3×3 de retalhos com legenda — o objeto central do hero |
| `.aula-item` | Card de aula: número colorido, tópicos em pills, ação "Aula Interativa" + link PDF (monitor) |
| Player `.etapa` | 5 fases andragógicas, uma por tela, barra de progresso, navegação A com círculos de 58px nos cantos e teclado ←/→ |
| `.player-scroll-hint` | Aparece somente quando a etapa tem overflow interno; informa “Role para continuar” e rola a área ao toque |
| `.termo` / `.tooltip` | Vocabulário: primeiro uso = lição; reuso = tooltip etiqueta (hover + toque) |
| `.mockup` | Simuladores fiéis de interface (WhatsApp, agenda) em HTML/CSS — nunca screenshots reais |
| `.quiz-option` | Opções grandes com letra A/B/C/D; feedback sucesso/erro sem culpa |
| `.momento` | Celebração "momento eu consigo" — verde→amarelo, retalho costurado |

## Estados e interação

- Progresso do player: `--progresso-preenchido` verde listrado, animação 500ms.
- Retalho costura na colcha ao concluir aula (metáfora; animação com
  `prefers-reduced-motion: reduce` → 0.01ms).
- Erro de quiz: feedback explica o que fazer, nunca julga a pessoa.
- Tooltip: hover (desktop) + toque (mobile); toque alterna `toque-ativo`.

## Regras de acessibilidade (60+)

1. Fonte de conteúdo ≥18px; contraste AA+ (texto marrom sobre algodão, branco sobre azul).
2. Um passo por tela no player; botão Anterior sempre visível.
3. Primeira interação de cada aula é trivial e garantida (autoeficácia — Di Giacomo 2019).
4. `prefers-reduced-motion`: todas as animações colapsam.
5. Foco visível: outline 4px azul.
6. Alvos de toque ≥44px; botões ≥56px.

## Responsivo

- `≤1100px`: hero empilha, features 2 col, footer 2 col.
- `≤900px`: stats 2×2, aula-item colapsa.
- `≤768px`: sidebar off-canvas + mobile header com hambúrguer; player nav empilha;
  tooltips reposicionam.
- `≤480px`: colcha 2 col, botões full-width.
- Aula 09 preserva o formato de slides, mas mantém toolbar global com retorno às aulas e ajuda, além de safe area na navegação inferior.

## Assets

- `public/assets/ilustracoes/` — hero-colcha-retalhos-16x9-v01, aula-avo-videochamada-subject-9x16-v01, textura-chita-floral-bg-16x9-v01 (gerados via Azure gpt-image-2; prompts em `art/prompts/`).
- `public/assets/mockups/` — simuladores de interface (aula_03 embute os primeiros).
- Índice e curadoria: `public/assets/README.md`.

## Decisões registradas

- **Open Sans como corpo**: overused segundo detectores, mas é escolha de acessibilidade
  para leitura 60+ (legibilidade comprovada, peso 400-700 disponível) — não é default estético.
- **Bordas laterais em seções**: costura `dashed`, não sólida (evita tell de side-tab).
- **PDFs**: rebaixados a "material do monitor" (link discreto sob o botão de aula interativa).
- **Quizzes**: integrados às aulas (fase "Sua Vez"); pratique.html mantém sistema próprio
  (`#quiz-container`) — o handler genérico do main.js não interfere.
- **Trilhas futuras** (IA, Mercado, Palestras): anunciadas "em breve" na sidebar, sem conteúdo.
- **Piso tipográfico das aulas**: conteúdo pedagógico e opções de quiz usam no mínimo 20px em desktop e mobile; overflow interno é preferível a reduzir a fonte e sempre recebe affordance condicional de rolagem.
- **Contrato acessível do player**: apenas a etapa ativa permanece sem `hidden`; ao navegar, o foco vai para o novo `h2`; termos respondem a Enter/Space/Escape; feedback de quiz usa live region; “Concluir” retorna ao catálogo.
- **Menu mobile**: abre com foco no primeiro item, torna o conteúdo principal inerte, fecha com Escape e restaura foco no botão de menu.
- **Aula 09 especializada**: preserva slides, mas cada slide pode rolar internamente; o hint “Role para ver todo o slide” aparece apenas quando conteúdo significativo continua abaixo, ignora decoração e some no fim.
- **Certificado**: ferramenta A4 standalone, sem shell do portal; preview atualiza automaticamente durante a digitação e a única ação principal é “Imprimir certificado”.
