# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite 7 + Vanilla JS/HTML/CSS (sem frameworks — restrição do projeto). Deploy: Vercel. PDFs servidos estáticos em `public/aulas/`.

## Users

- **Aluno 60+ (primário):** adulto com 50-60+ anos, iniciante ou com pouca experiência digital. Situação: quer aprender a usar tecnologia para falar com a família, resolver serviços (banco, saúde, governo) e ganhar autonomia — sem medo e no próprio ritmo. Motivações reais: comunicação com filhos/netos, serviços essenciais, entretenimento.
- **Monitor (secundário):** bolsista/monitor que conduz as aulas presenciais. Usa os PDFs como roteiro de conteúdo e o portal como ambiente onde o aluno pratica.
- **Coordenação/PROEX (terciário):** usa o portal como vitrine do programa (resultados, trilhas, expansão institucional).
- **Trilhas futuras (IA, Mercado, Palestras):** anunciadas como "em breve", sem conteúdo ativo.

## Product Purpose

Transformar o portal de inclusão digital da UEMG Frutal (hoje um repositório de PDFs) no **ambiente onde as aulas acontecem**: aulas interativas na web, guiadas por etapas, com conteúdo denso e metodologia andragógica. O aluno aprende fazendo na página; o PDF vira material de apoio do monitor. Sucesso = aluno 60+ que conclui a trilha com autonomia real (mensagens, PIX, Gov.br, documentos) e confiança digital.

## Positioning

Programa de extensão universitária com 16 anos de execução comprovada em Frutal (500+ pessoas capacitadas, retenção de 80% no ciclo PAEx 2025), que ensina inclusão digital com método andragógico — a universidade pública como ponte entre o idoso e o mundo digital. Diferente de tutoriais genéricos: linguagem de igual para igual, analogias do cotidiano, pré-requisitos ensinados na ordem certa, zero jargão sem explicação.

## Operating Context

- Aulas presenciais semanais (2h) em laboratório de informática, com duplas colaborativas e monitores de apoio.
- O aluno acessa o portal durante a aula (e em casa) para praticar; o monitor projeta e guia.
- Trilha atual: 8 aulas (fundamentos → navegação segura → WhatsApp → mídias sociais → Drive/Fotos → Docs/Sheets → Slides → Gov.br/PIX) + aula 09 de celebração.
- Metodologia documentada em `SEMINARIO/DOCS/Programa_de_Inclusão_Digital_60__-_Especificação_Completa.md`: andragogia, analogias, duplas, regras de ouro de segurança, avaliação por competências.
- Fundamentação acadêmica: `SEMINARIO/DOCS/Fundamentacao_Academica_Aulas_Interativas.md` (Knowles, Mezirow, Fidishun, Di Giacomo, Moore & Hancock + literatura BR).
- Coesão de pré-requisitos: `SEMINARIO/DOCS/Coesao_Trilha_Matriz_Prerequisitos.md` (glossário-mestre em 6 níveis, correções de ordem).

## Capabilities and Constraints

- **Ambiente de aulas interativas:** etapas guiadas (ciclo andragógico de 5 fases por aula: por que importa → vamos juntos → sua vez → na vida real → momento eu consigo), barra de progresso, navegação avançar/voltar, ajuda sempre visível.
- **Simuladores/mockups em código:** interfaces fiéis (WhatsApp, Gmail, PIX, Play Store, Gov.br) em HTML/CSS/SVG — clicáveis, com tooltips e hotspots. Não usar screenshots reais (exigiria logins); mockups em código permitem interação.
- **Sistema de tooltips de vocabulário:** primeiro uso do termo = lição com analogia; usos seguintes = tooltip com definição curta + link "relembrar aula X".
- **Biblioteca de assets reutilizáveis:** gerar e guardar assets (ilustrações, ícones, cenas, avatares, mockups) em estrutura nomeada e reutilizável — via skill `tec-image` (Azure gpt-image-2) para imagens ambientadas e via código para UI fiel. Nomeação `<surface>-<subject>-<role>-<ratio>-v01` conforme skill.
- **PDFs como material do monitor:** não são o produto principal; ficam acessíveis como roteiro/consulta.
- **Trilhas futuras:** 60+ é a trilha ativa; IA, Mercado e Palestras aparecem como "em breve" (sem conteúdo).
- **Acessibilidade 60+:** fonte mínima 18-20pt em conteúdo, alto contraste (WCAG AA+), botões amplos, um passo por tela, erro sem culpa, primeira interação trivial (autoeficácia), `prefers-reduced-motion`.
- **Restrições do projeto:** HTML/CSS/JS puro (sem frameworks); não deletar arquivos de `AULAS/`; não adicionar componentes UI complexos sem confirmação.
- **Semântica:** nunca vitimizar o idoso; tom de empoderamento e igualdade.

## Brand Commitments

- Nome: **Programa de Inclusão Digital UEMG** (portal do aluno).
- Identidade UEMG: logo existente (`public/images/logo.png`), logomarca horizontal UEMG (`public/logos/LOGOMARCA_UEMG_Horizontal.png`), manual de identidade visual (`SEMINARIO/manual_identidade_visual.html`).
- Paleta atual do portal (referência, não obrigatória): azul UEMG `#4A6FA5`, azul escuro `#2C4A6E`, verde `#7FB069`, amarelo `#F3DE8A`, vermelho UEMG `#C8102E`.
- Tipografia atual: Montserrat (display), Open Sans (texto), Kalam/Caveat (accent manuscrito).
- Ilustrações existentes em `public/images/` (hero-illustration, group-illustration, asset1) — mundo visual atual a ser regenerado ou substituído pelo new-work.
- Voz: acolhedora, de igual para igual, português brasileiro claro, sem jargão sem tradução.

## Evidence on Hand

- `public/aulas/aula_01..08.pdf` — conteúdo completo das 8 aulas (inventariado na matriz de coesão).
- `aulas.html`, `index.html`, `pratique.html`, `comunidade.html`, `certificado.html` — portal atual (Vite + vanilla).
- `public/aulas/aula_09.html` — aula interativa existente (padrão antigo, slides fullscreen; será substituído pelo novo player).
- `SEMINARIO/DOCS/Programa_de_Inclusão_Digital_60__-_Especificação_Completa.md` — metodologia andragógica completa.
- `SEMINARIO/DOCS/Fundamentacao_Academica_Aulas_Interativas.md` — 24 referências acadêmicas com DOI.
- `SEMINARIO/DOCS/Coesao_Trilha_Matriz_Prerequisitos.md` — glossário-mestre e correções de ordem.
- `.next_steps/proposta_expansao_assinado_assinado.pdf` — proposta assinada (Processo SEI 2350.01.0000627/2025-48).
- `.next_steps/programa_inclusao_digital_uemg.docx` + `programa_inclusao_digital_visual.html` — proposta institucional e versão visual.
- Resultados PAEx 2025: 20 matriculados, 16 concluintes, 80% retenção, 500+ históricos, 16+ anos.
- Não fabricar: depoimentos de alunos, números de impacto não comprovados, screenshots reais de apps.

## Product Principles

1. **Aprender fazendo, no ritmo de cada um** — conteúdo denso entregue em passos pequenos; prática real antes de teoria abstrata (andragogia de Knowles).
2. **Pré-requisitos na ordem certa** — nenhum termo técnico sem introdução; glossário-mestre com tooltips em toda a trilha.
3. **Empoderamento, nunca vitimização** — o idoso é protagonista; erro nunca é punido; "momento eu consigo" em toda aula.
4. **Densidade real, não slides bonitos** — cada aula resolve problemas reais (família, banco, saúde, governo) com conteúdo substancial.
5. **Assets como patrimônio reutilizável** — todo asset gerado (imagem ou mockup) entra na biblioteca nomeada para reuso nas trilhas futuras.

## Accessibility & Inclusion

- Público 60+ iniciante: fonte mínima 18-20pt, contraste AA+, botões amplos, alvos de toque grandes.
- Ansiedade digital como barreira primária (evidência: Di Giacomo 2019): um passo por tela, botão voltar sempre visível, ajuda fixa, sucesso imediato.
- Reduzir motion para usuários sensíveis (`prefers-reduced-motion`).
- Português claro; termos técnicos sempre com analogia do cotidiano.
