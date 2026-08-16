# DESIGN.md — Programa de Inclusão Digital UEMG (Portal do Aluno)

<!-- impeccable:design-schema 1 -->

Data da build: agosto de 2026 · Mundo: **Ateliê de Autonomia**

## Mundo visual

O portal é um ateliê calmo entre o laboratório público da universidade e a casa do aluno.
Adultos 60+ aparecem como protagonistas capazes. Cada aula concluída é uma peça montada na
jornada digital. O portal recusa nostalgia infantilizada, manuscrito decorativo e metáforas de
trabalho doméstico.

### Paleta

| Token | Valor | Papel |
|---|---|---|
| `--azul-uemg-profundo` | `#1E4466` | Sidebar, rodapé, títulos escuros e confiança institucional |
| `--azul-ceu` | `#3E6C9E` | Links, apoio e destaque secundário |
| `--terracota` | `#B5372C` | Ação principal |
| `--terracota-escura` | `#93281F` | Hover da ação principal |
| `--marigold` | `#E9B44C` | Acentos e etiquetas |
| `--verde-folha` | `#4E7D4A` | Conclusão e sucesso |
| `--papel` | `#FAF6EC` | Fundo de papel off-white |
| `--papel-rebaixado` | `#F1EADA` | Superfícies rebaixadas e trilhos |
| `--tinta` | `#3A3228` | Texto principal |
| `--tinta-suave` | `#6B6152` | Texto secundário |

A cor tem função. Terracota é ação, verde é sucesso, azul é orientação e marigold é destaque.
Estados nunca dependem apenas da cor.

### Tipografia

- Títulos e corpo usam **Open Sans**, com peso 700 ou 800 para hierarquia.
- Não há fonte manuscrita nas superfícies do portal ou das aulas.
- Conteúdo geral usa no mínimo 18 px.
- Conteúdo pedagógico e opções de quiz do player usam no mínimo 20 px.
- Títulos equilibram linhas com `text-wrap: balance`; descrições mantêm medida legível.

### Materiais

- Papel recortado em camadas, tinta fosca, contorno de grafite e madeira clara.
- `textura-oficina-papel-bg-16x9-v01.png` é a textura de fundo ativa.
- Divisores e molduras usam linhas sólidas de grafite suave. Não usam costura tracejada.
- Sombras têm deslocamento e desfoque suaves. Cards usam cantos de 8 a 22 px.

## Componentes

| Componente | Contrato |
|---|---|
| Sidebar | Azul institucional, marca UEMG, cinco rotas e menu off-canvas no mobile |
| `.btn` | Ação grande, alvo mínimo de 56 px, terracota para a ação primária |
| `.papel-card` | Superfície elevada de papel com linha de grafite e sombra suave |
| Peças de progresso | Nove peças numeradas para comunicar uma etapa por vez, sem pressionar o aluno |
| `.aula-item` | Capa 16:9, número, tópicos, ação da aula e PDF discreto do monitor |
| Player | Cinco fases andragógicas, uma etapa por tela e navegação pelos cantos |
| `.termo` / `.tooltip` | Primeira lição introduz o termo; reaparições explicam por tooltip acessível |
| Formulário de trilhas | Labels visíveis, erros por campo, consentimento LGPD e status ao vivo |
| Status de trilha | Selo com texto e cor: ativa, em planejamento ou formato aberto |

## Página inicial

O primeiro viewport usa a cena `home-turma-laboratorio-bg-16x9-v01.png` com uma área clara
para a promessa, a ação “Começar a Aula 1” e a explicação da ajuda disponível. A segunda
seção reforça que ninguém aprende sozinho. A sequência de nove peças, as evidências do
programa, as áreas de aprendizado, a aula recente e os acessos rápidos permanecem visíveis.

## Aulas e player

- As nove capas usam a série Ateliê de Autonomia em 16:9.
- Fotos didáticas reais e logos oficiais continuam como evidência de reconhecimento.
- Simuladores seguem em HTML, CSS e SVG. Nenhuma interface vem de imagem gerada.
- Dona Zilda e Seu José usam retratos sintéticos próprios do mundo Ateliê.
- A barra de progresso comunica etapa concluída e peça montada.
- `body` não rola no player. Overflow significativo acontece só dentro da etapa e aciona a dica de rolagem.
- Setas navegam apenas fora de controles; a nova etapa recebe foco no `h2`; Escape fecha tooltip e menu.

## Trilhas

`/trilhas.html` é uma página de leitura e participação, não uma página de venda. Ela mostra:

1. Inclusão Digital 60+ como trilha ativa com nove aulas.
2. Inteligência Artificial para Todos como proposta em planejamento.
3. Tecnologia e Mercado de Trabalho como proposta em planejamento.
4. Palestras e Cursos com Convidados como formato aberto.

Cards usam `<details>` para módulos em divulgação progressiva. Trilha ativa pode abrir as aulas.
Trilhas futuras convidam a sugerir ou colaborar. Nenhuma delas oferece um botão para começar ou
data de lançamento.

O formulário usa `POST` para um endpoint Formspree configurável. Enquanto o atributo
`data-endpoint-configured` é `false`, a página informa com clareza que o envio ainda não está
configurado e não transmite dados. Quando estiver ligado, o JavaScript envia o `FormData`,
anuncia sucesso ou falha com `role="status"` e mantém os mesmos campos e consentimento.

## Acessibilidade e responsividade

1. Foco visível de 4 px em todos os controles.
2. Alvos de toque com pelo menos 44 px. Botões principais têm 56 px.
3. Menu móvel move foco para o primeiro link, torna o conteúdo inerte e fecha com Escape.
4. `prefers-reduced-motion: reduce` colapsa animações e transições.
5. A Home, Aulas, Pratique, Comunidade e Trilhas passam para uma coluna em telas pequenas.
6. O player colapsa `.etapa-grid` para uma coluna e coloca o visual antes do texto no mobile.
7. O formulário não bloqueia o botão antes da validação. Erros recebem `aria-invalid`,
   `aria-describedby` e foco no primeiro campo inválido.

## Assets ativos

| Asset | Uso |
|---|---|
| `home-turma-laboratorio-bg-16x9-v01.png` | Home e comunidade |
| `aula-fundamentos-computador` até `aula-celebracao-conquistas` | Nove capas de aula |
| `avatar-dona-zilda-subject-1x1-v01.png` | Simuladores de Dona Zilda |
| `avatar-seu-jose-subject-1x1-v01.png` | Simuladores de Seu José |
| `textura-oficina-papel-bg-16x9-v01.png` | Fundo global de papel |
| `roadmap-trilhas-futuras-bg-16x9-v01.png` | Hero de `/trilhas.html` |

Todo asset gerado tem prompt em `art/prompts/rebuild_2026/` e receipt em
`art/provenance/rebuild_2026-assets.json`. A freeze-list preserva câmera no nível dos olhos,
luz quente, papel recortado, telas vazias e pessoas adultas brasileiras capazes.

## Decisões registradas

- O Ateliê de Autonomia substitui a Colcha de Retalhos conforme `SPEC.md`.
- Open Sans atende título e corpo para favorecer leitura 60+.
- PDFs seguem como material discreto do monitor.
- Certificado continua uma ferramenta A4 independente, com conteúdo factual em HTML e CSS.
- Conteúdo, rotas, logos, fotos didáticas e atribuição institucional permanecem intactos.
- O destino inicial do formulário é um serviço estático de formulários. Não há backend próprio.
