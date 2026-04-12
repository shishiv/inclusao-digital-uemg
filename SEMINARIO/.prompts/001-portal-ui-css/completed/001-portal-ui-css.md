# Prompt 001: Modernizar CSS do Portal

<objective>
Modernizar a interface CSS do portal educacional para idosos 60+.

**Purpose:** Transformar UI "arcaica" em design moderno, vibrante e acessivel
**Output:** CSS atualizado em todas as 4 paginas do portal
</objective>

<context>
**Plano completo:** Leia `/home/shiv/repos/SEMINARIO/.claude/plans/merry-popping-kay.md`
**CSS atual:** `/home/shiv/repos/SEMINARIO/portal/src/style.css` (1089 linhas)
**Paginas:**
- `/home/shiv/repos/SEMINARIO/portal/index.html`
- `/home/shiv/repos/SEMINARIO/portal/aulas.html`
- `/home/shiv/repos/SEMINARIO/portal/pratique.html`
- `/home/shiv/repos/SEMINARIO/portal/comunidade.html`
</context>

<requirements>

## Nova Paleta de Cores (Vibrantes e Alegres)

```css
/* SUBSTITUIR cores antigas por estas */
--color-primary: #2563EB;           /* Azul vibrante */
--color-primary-light: #3B82F6;
--color-primary-dark: #1D4ED8;
--color-secondary: #10B981;         /* Verde esmeralda */
--color-secondary-light: #34D399;
--color-secondary-dark: #059669;
--color-accent: #F59E0B;            /* Amarelo/laranja alegre */
--color-accent-light: #FBBF24;
```

## Novas Variaveis CSS a Adicionar

```css
/* Gradientes */
--gradient-primary: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
--gradient-secondary: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 100%);
--gradient-hero: linear-gradient(135deg, #F8FAFC 0%, #E0F2FE 50%, #DBEAFE 100%);

/* Sombras com profundidade */
--shadow-xs: 0 1px 2px rgba(37, 99, 235, 0.04);
--shadow-sm: 0 2px 8px rgba(37, 99, 235, 0.06);
--shadow-md: 0 4px 16px rgba(37, 99, 235, 0.08);
--shadow-lg: 0 8px 32px rgba(37, 99, 235, 0.12);
--shadow-xl: 0 16px 48px rgba(37, 99, 235, 0.16);
--shadow-glow: 0 0 20px rgba(16, 185, 129, 0.3);

/* Efeito Glass */
--glass-bg: rgba(255, 255, 255, 0.85);
--glass-border: rgba(255, 255, 255, 0.3);
--glass-blur: blur(10px);

/* Animacoes */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--transition-fast: 0.15s var(--ease-out-expo);
--transition-normal: 0.3s var(--ease-out-expo);
```

## Modernizacoes por Componente

### 1. Sidebar
- Background: `var(--gradient-primary)` ao inves de cor solida
- Adicionar textura SVG sutil como ::before
- Links: hover com background deslizante (translateX animation)
- Link ativo: `box-shadow: inset 0 0 20px rgba(16, 185, 129, 0.2)` (glow verde)
- Logo: `transform: scale(1.05)` no hover

### 2. Hero Section
- Background: `var(--gradient-hero)`
- Adicionar circulos decorativos com ::before e ::after (radial-gradient)
- Stats: efeito glass (`backdrop-filter: blur(10px)`, border semi-transparente)
- Stats hover: `transform: translateY(-4px)` + shadow-lg
- Titulo "Inclusao Digital": texto com gradiente

### 3. Botoes (.btn)
- `.btn-primary`: `background: var(--gradient-secondary)`, `box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35)`
- Hover: `transform: translateY(-3px)`, sombra mais intensa
- Adicionar ::before com gradient overlay para efeito de brilho

### 4. Cards (.quick-card, .latest-card)
- Background: `var(--glass-bg)` com `backdrop-filter: var(--glass-blur)`
- Border: `1px solid var(--glass-border)`
- Hover: border verde, shadow-xl, translateY(-8px)
- Icones: `transform: scale(1.1) rotate(5deg)` no hover

### 5. Accordion (.accordion-item)
- Border radius maior (16px)
- Hover: background gradiente sutil
- `.accordion-number`: texto com gradiente verde
- Badge "NOVA": `animation: pulse 2s infinite`
- Item novo: `box-shadow: var(--shadow-glow)`

### 6. Quiz Cards (.quiz-card, .quiz-option)
- Cards: gradiente sutil de branco para cinza claro
- Opcoes: barra lateral esquerda (4px) que aparece no hover com scaleY
- Opcoes hover: `transform: translateX(4px)`
- Feedback: gradientes de cor (verde/vermelho)

### 7. Footer
- Adicionar barra superior (4px) com gradiente verde
- Background: `var(--gradient-primary)`

### 8. Animacoes Globais

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

/* Aplicar fadeInUp a elementos principais */
.hero-content, .page-header, .section-title {
  animation: fadeInUp 0.6s var(--ease-out-expo) forwards;
}

/* Focus states visiveis */
.btn:focus-visible, .quiz-option:focus-visible, .sidebar-link:focus-visible {
  outline: 3px solid var(--color-secondary);
  outline-offset: 3px;
}

/* Respeitar preferencia de movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Manter Acessibilidade
- NAO reduzir tamanhos de fonte (manter 16px base)
- Manter alto contraste (verificar WCAG AA)
- Manter focus states visiveis
- Manter areas de clique grandes

</requirements>

<output>
Modificar arquivo:
- `/home/shiv/repos/SEMINARIO/portal/src/style.css`

NAO criar arquivos novos, apenas modernizar o CSS existente.
</output>

<verification>
Apos concluir as modificacoes:

1. Verificar se todas as variaveis foram adicionadas ao :root
2. Verificar se as cores foram atualizadas em todos os lugares
3. Verificar se as animacoes estao funcionando
4. Confirmar que prefers-reduced-motion esta respeitado
</verification>

<summary_requirements>
Ao finalizar, criar arquivo: `/home/shiv/repos/SEMINARIO/.prompts/001-portal-ui-css/SUMMARY.md`

Formato:
```markdown
# Portal UI CSS Summary

**{Descrever o resultado visual em uma linha}**

## Version
v1

## Key Findings
- {Mudanca principal 1}
- {Mudanca principal 2}
- {Mudanca principal 3}

## Files Modified
- `portal/src/style.css` - {descricao das mudancas}

## Decisions Needed
{Decisoes que o usuario precisa tomar, ou "None"}

## Blockers
{Problemas encontrados, ou "None"}

## Next Step
Testar responsividade em todos os breakpoints

---
*Confidence: High*
```
</summary_requirements>

<success_criteria>
- [ ] Cores vibrantes (#2563EB, #10B981, #F59E0B) aplicadas
- [ ] Gradientes funcionando em sidebar, hero, botoes
- [ ] Efeito glass nos cards e stats
- [ ] Animacoes fadeInUp e hover effects
- [ ] Focus states visiveis
- [ ] prefers-reduced-motion respeitado
- [ ] SUMMARY.md criado
</success_criteria>
