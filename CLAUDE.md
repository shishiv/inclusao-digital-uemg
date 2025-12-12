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
