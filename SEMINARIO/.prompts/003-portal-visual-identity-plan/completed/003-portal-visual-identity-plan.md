# Prompt: Plano de Implementação da Identidade Visual

## Objetivo
Criar um plano detalhado para aplicar a identidade visual definida no manual ao portal existente, usando **Kalam** como fonte cursiva (em vez de Caveat).

## Contexto

### Arquivos de Referência (LEITURA OBRIGATÓRIA)
- `@manual_identidade_visual.html` - Manual completo de identidade visual com:
  - Paleta de cores (primárias, secundárias, fundos, textos)
  - Tipografia (Montserrat, Open Sans, fonte accent)
  - Componentes (botões, badges, cards, forms)
  - Espaçamento e border-radius
  - Iconografia (emojis)
  - Boas práticas (do's and don'ts)

- `@opcoes_fonte_cursiva.html` - Comparação entre Caveat e Kalam
  - **DECISÃO**: Usar **Kalam** como fonte cursiva
  - Aplicações: slogan, ênfases, anotações, citações

- `@wireframe_portal.html` - Wireframe visual completo com:
  - 5 páginas: Home, Sobre, Cronograma, Materiais, Contato
  - Design tokens (CSS variables)
  - Estrutura de componentes
  - Layout responsivo

### Estado Atual do Portal
Arquivos existentes em `portal/`:
- `index.html` - Página inicial
- `aulas.html` - Lista de aulas
- `pratique.html` - Exercícios
- `comunidade.html` - WhatsApp community
- `src/style.css` - CSS principal (já modernizado com gradientes e glass effects)
- `src/main.js` - JavaScript principal

### Contexto Anterior
O portal já passou por uma modernização CSS (ver `.prompts/001-portal-ui-css/SUMMARY.md`) com:
- Efeito glass em cards
- Gradientes modernos
- Animações suaves
- Sistema de sombras

## Requisitos do Plano

### 1. Análise de Gap
Identificar diferenças entre:
- Estado atual do portal (`portal/src/style.css`)
- Especificações do manual de identidade visual
- Wireframe de referência

### 2. Tarefas de Implementação
Para cada área, definir tarefas específicas:

#### A. Tipografia
- [ ] Substituir Caveat por **Kalam** nas importações do Google Fonts
- [ ] Atualizar `--font-accent` para Kalam
- [ ] Verificar todas as propriedades `font-family` que usam Caveat
- [ ] Ajustar pesos de fonte (Kalam: 300, 400, 700 vs Caveat: 400-700)
- [ ] Validar escala tipográfica conforme manual

#### B. Paleta de Cores
- [ ] Verificar se CSS variables correspondem ao manual
- [ ] Mapear cores atuais para cores do manual
- [ ] Identificar cores que precisam ser atualizadas

#### C. Componentes
- [ ] Botões: verificar estilos primary, secondary, outline
- [ ] Badges: estados (blue, green, yellow, red)
- [ ] Cards: border-radius, padding, shadow
- [ ] Forms: input styling, focus states
- [ ] Navigation: header, sidebar, footer

#### D. Espaçamento e Layout
- [ ] Verificar sistema de espaçamento (8px base)
- [ ] Border-radius consistente
- [ ] Grid layouts

#### E. Acessibilidade
- [ ] Contraste WCAG AA
- [ ] Tamanho mínimo de fonte (16px corpo)
- [ ] Touch targets para 60+
- [ ] prefers-reduced-motion

### 3. Ordem de Execução
Definir sequência lógica das tarefas considerando:
- Dependências entre mudanças
- Risco de breaking changes
- Facilidade de validação

### 4. Arquivos Afetados
Lista completa de arquivos que serão modificados.

### 5. Critérios de Validação
Como verificar que cada tarefa foi completada corretamente.

## Output

Salvar o plano em: `.prompts/003-portal-visual-identity-plan/portal-visual-identity-plan.md`

### Estrutura do Output

```xml
<plan>
  <summary>Resumo executivo do plano</summary>

  <gap_analysis>
    <typography>Diferenças encontradas na tipografia</typography>
    <colors>Diferenças encontradas nas cores</colors>
    <components>Diferenças encontradas nos componentes</components>
    <spacing>Diferenças encontradas no espaçamento</spacing>
  </gap_analysis>

  <tasks>
    <phase name="1. Typography Update">
      <task id="1.1" file="portal/src/style.css" priority="high">
        <description>Descrição clara da tarefa</description>
        <changes>Mudanças específicas a fazer</changes>
        <validation>Como validar que funcionou</validation>
      </task>
      <!-- mais tasks -->
    </phase>
    <!-- mais phases -->
  </tasks>

  <execution_order>Lista ordenada de task IDs</execution_order>

  <affected_files>Lista de arquivos a modificar</affected_files>

  <risks>Riscos potenciais e mitigações</risks>

  <confidence>high/medium/low</confidence>
  <dependencies>O que é necessário antes de começar</dependencies>
  <open_questions>Dúvidas que precisam ser esclarecidas</open_questions>
  <assumptions>Premissas assumidas</assumptions>
</plan>
```

## SUMMARY.md

Criar também `.prompts/003-portal-visual-identity-plan/SUMMARY.md` com:

```markdown
# Portal Visual Identity Plan Summary

**[One-liner substantivo descrevendo o plano]**

## Version
v1

## Key Findings
- [3-5 descobertas principais da análise de gap]

## Phases
- [Lista das fases do plano com contagem de tasks]

## Decisions Needed
- [Decisões que precisam de input do usuário]

## Blockers
- [Impedimentos identificados]

## Next Step
[Ação concreta para avançar]

---
*Confidence: [high/medium/low]*
```

## Critérios de Sucesso

1. Análise de gap completa e documentada
2. Tasks granulares com descrição clara
3. Ordem de execução lógica
4. Cada task é independentemente validável
5. Riscos identificados com mitigações
6. SUMMARY.md com one-liner substantivo (não genérico)
