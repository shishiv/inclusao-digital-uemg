<objective>
Criar o arquivo CLAUDE.md para o repositório do Programa de Inclusão Digital 60+ da UEMG Frutal.

Este arquivo serve como instruções permanentes para o Claude ao trabalhar neste projeto, garantindo consistência e aderência às convenções estabelecidas.
</objective>

<context>
O projeto tem dois componentes principais:
1. **Portal web** (pasta `portal/`): Site de apoio aos alunos usando Vite + Vanilla JS
2. **Materiais didáticos** (pasta `AULAS/` e `DOCS/`): PDFs e documentação do programa

Público-alvo do programa: pessoas 60+ com pouca experiência digital
Metodologia: Andragogia (educação de adultos)
Deploy: Vercel com GitHub Actions
</context>

<requirements>
O CLAUDE.md deve incluir as seguintes seções e regras:

## Idioma e Comunicação
- Documento em português brasileiro
- Estilo balanceado: técnico mas com contexto quando necessário
- Termos técnicos podem permanecer em inglês quando não há tradução adequada

## Estrutura do Projeto
- Descrever a organização das pastas principais (portal/, AULAS/, DOCS/)
- Explicar o propósito de cada área

## Convenções de Código (Portal)
- Manter simplicidade: HTML/CSS/JS puro, sem frameworks
- Priorizar acessibilidade (fontes grandes, alto contraste, botões amplos)
- Build com Vite, deploy na Vercel

## Convenções de Arquivos
- Nomes em snake_case português (ex: aula_01.pdf, cronograma_final.md)
- PDFs de aulas seguem padrão: aula_XX.pdf

## Git e Commits
- Mensagens usando conventional commits em inglês (feat:, fix:, docs:)
- Descrição detalhada em português quando necessário
- Workflow flexível: commits diretos na main para mudanças pequenas, feature branches para mudanças maiores

## Restrições Importantes (NUNCA fazer)
1. Nunca deletar arquivos da pasta AULAS/ sem confirmação explícita do usuário
2. Nunca adicionar componentes UI complexos ao portal - manter interface simples e intuitiva para idosos
3. Nunca usar frameworks JS (React, Vue, etc.) - manter Vanilla JS

## Materiais Didáticos
- Criação usando múltiplos formatos: PowerPoint/Slides -> Markdown -> HTML para impressão
- Seguir princípios andragógicos nas explicações
- Usar linguagem clara e acessível

## Acessibilidade
- Importante mas não restritiva
- Priorizar legibilidade e facilidade de uso
- Considerar que usuários têm 60+ anos
</requirements>

<output>
Criar arquivo `./CLAUDE.md` na raiz do repositório com todas as instruções estruturadas de forma clara e concisa.

O arquivo deve ser prático e direto, sem seções desnecessárias.
</output>

<verification>
Antes de finalizar, verificar:
- Todas as convenções mencionadas estão documentadas
- Restrições estão claramente destacadas
- Documento está em português brasileiro
- Estrutura é fácil de ler e consultar
</verification>
