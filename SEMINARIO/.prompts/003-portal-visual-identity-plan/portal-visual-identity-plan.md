# Plano de Implementação da Identidade Visual - Portal UEMG Inclusão Digital

## Summary

Este plano detalha a aplicação da identidade visual oficial do manual ao portal existente, com **Kalam** substituindo Caveat como fonte cursiva. O portal já possui modernização visual (gradientes, glass effects), mas precisa alinhar-se completamente com a paleta de cores, tipografia e componentes do manual.

---

## Gap Analysis

### Typography

**Estado Atual:**
- Google Font: `Inter` (weights 400, 500, 600, 700)
- Sem fonte display (Montserrat)
- Sem fonte accent/cursiva (Caveat/Kalam)
- Variáveis CSS: `--font-family: 'Inter', sans-serif`

**Manual Especifica:**
- Display: **Montserrat** (weights 500, 600, 700, 800)
- Corpo: **Open Sans** (weights 400, 500, 600)
- Accent: **Kalam** (weights 300, 400, 700) - substituindo Caveat do manual original

**Diferenças:**
- ❌ Falta Montserrat para títulos/navegação/botões
- ❌ Falta Open Sans para textos de corpo
- ❌ Falta Kalam para slogan/"Conhecimento que conecta"/anotações
- ❌ Inter não está no manual (será substituída)

**Escala Tipográfica:**

| Elemento | Manual | Portal Atual | Status |
|----------|--------|--------------|--------|
| H1 Principal | 3rem (48px) Montserrat 800 | 3xl = 36px | ⚠️ Ajustar |
| H2 Seção | 2rem (32px) Montserrat 700 | 2xl = 28px | ⚠️ Ajustar |
| H3 Subseção | 1.4rem (22px) Montserrat 700 | xl = 22px | ✅ OK |
| Slogan | 2rem (32px) Kalam 400 | N/A | ❌ Adicionar |
| Corpo | 1.05rem (17px) Open Sans 400 | base = 16px | ⚠️ Ajustar |
| Pequeno | 0.85rem (14px) Open Sans 400 | sm = 14px | ✅ OK |

### Colors

**Cores Primárias - Comparação:**

| Uso | Manual | Portal Atual | Match? |
|-----|--------|--------------|--------|
| Azul UEMG | `#4A6FA5` | `#2563EB` (blue-600) | ❌ Diferente |
| Azul Escuro | `#2C4A6E` | `#1D4ED8` (blue-700) | ❌ Diferente |
| Azul Claro | `#6B8FC5` | `#3B82F6` (blue-500) | ❌ Diferente |
| Verde | `#7FB069` | `#10B981` (emerald-500) | ❌ Diferente |
| Verde Escuro | `#5A8A4A` | `#059669` | ❌ Diferente |
| Amarelo | `#F3DE8A` | `#F59E0B` (amber-500) | ❌ Diferente |
| Vermelho UEMG | `#C8102E` | `#EF4444` (red-500) | ❌ Diferente |

**Cores de Fundo:**

| Uso | Manual | Portal Atual | Match? |
|-----|--------|--------------|--------|
| Azul BG | `#E8F1F8` | `#E0F2FE` (via gradiente) | ⚠️ Similar |
| Verde BG | `#E8F5E1` | `#dcf8c6` (WhatsApp) | ⚠️ Similar |
| Amarelo BG | `#FFF9E6` | N/A | ❌ Faltando |
| Cinza BG | `#F5F7FA` | `#F8FAFC` | ✅ Muito próximo |

**Cores de Texto:**

| Uso | Manual | Portal Atual | Match? |
|-----|--------|--------------|--------|
| Cinza Escuro | `#333333` | N/A | ❌ Faltando |
| Cinza Texto | `#555555` | `#333333` | ⚠️ Invertido |
| Cinza Médio | `#9AA5B4` | `#666666` | ❌ Diferente |

**Conclusão:**
- Portal usa paleta Tailwind (blues, emeralds, ambers)
- Manual usa paleta institucional UEMG
- **100% das cores primárias precisam ser atualizadas**

### Components

**Botões:**

| Aspecto | Manual | Portal Atual | Status |
|---------|--------|--------------|--------|
| Padding | 14px 28px | var(--spacing-sm) var(--spacing-lg) ≈ 16px 32px | ⚠️ Ajustar |
| Border Radius | 12px | var(--border-radius) = 12px | ✅ OK |
| Fonte | Montserrat SemiBold 600 | Inter 600 | ❌ Trocar |
| Primary BG | Verde `#7FB069` | Verde gradient `#10B981` | ❌ Trocar |
| Secondary BG | Azul BG `#E8F1F8` | Transparente + borda | ❌ Ajustar |
| Secondary Color | Azul UEMG `#4A6FA5` | `#2563EB` | ❌ Trocar |

**Cards:**

| Aspecto | Manual | Portal Atual | Status |
|---------|--------|--------------|--------|
| Border Radius | 16px | var(--border-radius-lg) = 16px | ✅ OK |
| Padding | 25px | var(--spacing-lg) = 2rem ≈ 32px | ⚠️ Ajustar |
| Shadow | 0 4px 20px rgba(0,0,0,0.08) | var(--shadow-md) similar | ✅ OK |

**Badges:**

| Estado | Manual BG | Manual Color | Portal Atual | Status |
|--------|-----------|--------------|--------------|--------|
| Blue (Slides) | `#E8F1F8` | `#4A6FA5` | Similar | ⚠️ Ajustar cores |
| Green (Concluído) | `#E8F5E1` | `#5A8A4A` | Similar | ⚠️ Ajustar cores |
| Yellow (Andamento) | `#FFF9E6` | `#D4C06A` | `#F59E0B` | ❌ Trocar |
| Red (Atenção) | `#FDEAEA` | `#C8102E` | `#EF4444` | ❌ Trocar |

**Forms:**

| Aspecto | Manual | Portal Atual | Status |
|---------|--------|--------------|--------|
| Border | 2px solid `#E5E9EF` | 2px solid `#e0e0e0` | ⚠️ Ajustar cor |
| Border Radius | 10px | var(--border-radius-sm) = 8px | ⚠️ Ajustar |
| Focus Border | Azul UEMG `#4A6FA5` | `#2563EB` | ❌ Trocar |
| Font | Open Sans 1rem | Inter 1rem | ❌ Trocar fonte |

### Spacing

**Sistema de Espaçamento:**

| Nome | Manual | Portal Atual | Match? |
|------|--------|--------------|--------|
| XS | 8px | --spacing-xs = 0.5rem (8px) | ✅ OK |
| SM | 16px | --spacing-sm = 1rem (16px) | ✅ OK |
| MD | 24px | --spacing-md = 1.5rem (24px) | ✅ OK |
| LG | 40px | --spacing-lg = 2rem (32px) | ❌ Diferente |
| XL | 64px | --spacing-xl = 3rem (48px) | ❌ Diferente |
| 2XL | 100px | N/A | ❌ Faltando |

**Border Radius:**

| Nome | Manual | Portal Atual | Match? |
|------|--------|--------------|--------|
| SM | 8px | --border-radius-sm = 8px | ✅ OK |
| MD | 12px | --border-radius = 12px | ✅ OK |
| LG | 20px | --border-radius-lg = 16px | ⚠️ Ajustar |
| XL | 30px | N/A | ❌ Faltando |

### Layout

**Elementos Específicos:**

| Elemento | Manual | Portal Atual | Status |
|----------|--------|--------------|--------|
| Sidebar Width | N/A (manual não tem sidebar) | 260px | ✅ Mantém |
| Sidebar BG | N/A | `gradient-primary` (azul) | ⚠️ Atualizar cores |
| Glass Effects | ✅ Suportado (seções do manual) | ✅ Implementado | ✅ OK |
| Gradientes | ✅ Backgrounds suaves | ✅ Implementado | ⚠️ Ajustar cores |

---

## Tasks

### Phase 1: Typography Update

#### Task 1.1: Update Google Fonts Import
**File:** `portal/index.html`, `portal/aulas.html`, `portal/pratique.html`, `portal/comunidade.html`
**Priority:** HIGH

**Description:**
Substituir importação do Google Fonts para incluir Montserrat, Open Sans e **Kalam** (em vez de Caveat).

**Changes:**
```html
<!-- ANTES -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

<!-- DEPOIS -->
<link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Montserrat:wght@500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

**Validation:**
- Verificar DevTools > Network que as 3 fontes são carregadas
- Verificar que nenhum erro de CORS aparece no console

---

#### Task 1.2: Update CSS Variables - Fonts
**File:** `portal/src/style.css`
**Priority:** HIGH

**Description:**
Atualizar variáveis de fonte no `:root` para usar Montserrat, Open Sans e Kalam.

**Changes:**
```css
/* ANTES */
--font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* DEPOIS */
--font-display: 'Montserrat', sans-serif;
--font-body: 'Open Sans', sans-serif;
--font-accent: 'Kalam', cursive;
```

**Validation:**
- Buscar no código por `var(--font-family)` e substituir por `var(--font-display)` ou `var(--font-body)` conforme apropriado
- Verificar visualmente que títulos usam Montserrat
- Verificar que corpo de texto usa Open Sans

---

#### Task 1.3: Apply Font Variables Throughout CSS
**File:** `portal/src/style.css`
**Priority:** HIGH

**Description:**
Aplicar as variáveis de fonte nos seletores corretos conforme manual.

**Changes:**
```css
/* Títulos e elementos de destaque */
h1, h2, h3, h4,
.section-title,
.page-title,
.hero-title,
.sidebar-title,
.btn,
.accordion-title,
.quiz-question {
  font-family: var(--font-display);
}

/* Texto de corpo */
body,
p,
.hero-description,
.section-subtitle,
.page-subtitle,
.accordion-content,
.quiz-option,
input,
textarea {
  font-family: var(--font-body);
}

/* Elementos accent (slogan, anotações) */
.hero-subtitle,
.slogan,
.annotation,
.highlight-note {
  font-family: var(--font-accent);
}
```

**Validation:**
- Inspecionar elementos no browser e confirmar font-family
- Verificar que `.hero-subtitle` ("Conhecimento que conecta") usa Kalam
- Verificar que botões usam Montserrat

---

#### Task 1.4: Update Typography Scale
**File:** `portal/src/style.css`
**Priority:** MEDIUM

**Description:**
Ajustar escala tipográfica para corresponder ao manual.

**Changes:**
```css
/* ANTES */
--font-size-3xl: 36px;
--font-size-2xl: 28px;

/* DEPOIS */
--font-size-3xl: 48px;  /* 3rem - H1 Principal */
--font-size-2xl: 32px;  /* 2rem - H2 Seção / Slogan */
--font-size-xl: 22px;   /* 1.4rem - H3 Subseção */
--font-size-lg: 19px;   /* 1.2rem - H4 Card */
--font-size-base: 17px; /* 1.05rem - Corpo */
--font-size-sm: 14px;   /* 0.85rem - Pequeno */
```

**Validation:**
- Medir tamanhos reais com DevTools
- Comparar com wireframe e manual
- Verificar legibilidade em mobile (tamanho mínimo 16px corpo)

---

### Phase 2: Color Palette Update

#### Task 2.1: Update Primary Colors
**File:** `portal/src/style.css`
**Priority:** HIGH

**Description:**
Substituir cores primárias por paleta institucional UEMG do manual.

**Changes:**
```css
/* ANTES */
--color-primary: #2563EB;
--color-primary-light: #3B82F6;
--color-primary-dark: #1D4ED8;
--color-secondary: #10B981;
--color-secondary-light: #34D399;
--color-secondary-dark: #059669;
--color-accent: #F59E0B;
--color-accent-light: #FBBF24;

/* DEPOIS */
/* Cores Primárias - UEMG */
--azul-uemg: #4A6FA5;
--azul-escuro: #2C4A6E;
--azul-claro: #6B8FC5;
--azul-bg: #E8F1F8;

--verde: #7FB069;
--verde-escuro: #5A8A4A;
--verde-claro: #9FC78F;
--verde-bg: #E8F5E1;

--amarelo: #F3DE8A;
--amarelo-escuro: #D4C06A;
--amarelo-bg: #FFF9E6;

--vermelho-uemg: #C8102E;

/* Aliases para compatibilidade com código existente */
--color-primary: var(--azul-uemg);
--color-primary-light: var(--azul-claro);
--color-primary-dark: var(--azul-escuro);
--color-secondary: var(--verde);
--color-secondary-light: var(--verde-claro);
--color-secondary-dark: var(--verde-escuro);
--color-accent: var(--amarelo);
--color-accent-light: var(--amarelo-escuro);
```

**Validation:**
- Verificar que sidebar usa gradiente de azul UEMG
- Verificar que botões primários usam verde `#7FB069`
- Verificar que badges "NOVA" usam gradiente verde
- Usar DevTools > Computed para confirmar hex values

---

#### Task 2.2: Update Background Colors
**File:** `portal/src/style.css`
**Priority:** MEDIUM

**Description:**
Atualizar cores de fundo para corresponder ao manual.

**Changes:**
```css
/* ANTES */
--color-bg-light: #D6EAF5;
--color-bg-warm: #FAE5D3;
--color-bg-page: #F8FAFC;
--color-bg-white: #FFFFFF;
--color-bg-sidebar: #1E4D6B;

/* DEPOIS */
--branco: #FFFFFF;
--cinza-bg: #F5F7FA;
--cinza-claro: #E5E9EF;

/* Aliases */
--color-bg-page: var(--cinza-bg);
--color-bg-white: var(--branco);
--color-bg-light: var(--azul-bg);
--color-bg-warm: var(--amarelo-bg);
```

**Validation:**
- Verificar background da página (`body`)
- Verificar backgrounds de seções alternadas
- Verificar cards e componentes

---

#### Task 2.3: Update Text Colors
**File:** `portal/src/style.css`
**Priority:** MEDIUM

**Description:**
Atualizar cores de texto conforme manual.

**Changes:**
```css
/* ANTES */
--color-text: #333333;
--color-text-light: #666666;
--color-text-white: #FFFFFF;

/* DEPOIS */
--cinza-escuro: #333333;
--cinza-texto: #555555;
--cinza-medio: #9AA5B4;

/* Aliases */
--color-text: var(--cinza-escuro);
--color-text-light: var(--cinza-texto);
--color-text-muted: var(--cinza-medio);
--color-text-white: #FFFFFF;
```

**Validation:**
- Verificar contraste WCAG AA em todos os pares cor/fundo
- Testar com ferramenta de contraste (Chrome DevTools > Lighthouse)
- Verificar legibilidade para 60+

---

#### Task 2.4: Update Gradients
**File:** `portal/src/style.css`
**Priority:** MEDIUM

**Description:**
Atualizar gradientes para usar paleta UEMG.

**Changes:**
```css
/* ANTES */
--gradient-primary: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
--gradient-secondary: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 100%);
--gradient-hero: linear-gradient(135deg, #F8FAFC 0%, #E0F2FE 50%, #DBEAFE 100%);

/* DEPOIS */
--gradient-primary: linear-gradient(135deg, var(--azul-escuro) 0%, var(--azul-uemg) 100%);
--gradient-secondary: linear-gradient(135deg, var(--verde) 0%, var(--verde-claro) 100%);
--gradient-hero: linear-gradient(135deg, #F8FAFC 0%, var(--azul-bg) 50%, #DBEAFE 100%);
```

**Validation:**
- Verificar sidebar background
- Verificar hero section background
- Verificar botões com gradiente

---

#### Task 2.5: Update Shadows
**File:** `portal/src/style.css`
**Priority:** LOW

**Description:**
Ajustar sombras para usar tons da paleta UEMG.

**Changes:**
```css
/* ANTES */
--shadow-sm: 0 2px 8px rgba(37, 99, 235, 0.06);
--shadow-md: 0 4px 16px rgba(37, 99, 235, 0.08);
--shadow-lg: 0 8px 32px rgba(37, 99, 235, 0.12);
--shadow-xl: 0 16px 48px rgba(37, 99, 235, 0.16);
--shadow-glow: 0 0 20px rgba(16, 185, 129, 0.3);

/* DEPOIS */
--shadow-sm: 0 2px 8px rgba(74, 111, 165, 0.06);
--shadow-md: 0 4px 16px rgba(74, 111, 165, 0.08);
--shadow-lg: 0 8px 32px rgba(74, 111, 165, 0.12);
--shadow-xl: 0 16px 48px rgba(74, 111, 165, 0.16);
--shadow-glow: 0 0 20px rgba(127, 176, 105, 0.3);
```

**Validation:**
- Verificar visualmente que sombras são sutis
- Confirmar que mantêm profundidade visual

---

### Phase 3: Component Styling

#### Task 3.1: Update Button Styles
**File:** `portal/src/style.css`
**Priority:** HIGH

**Description:**
Atualizar estilos de botões para corresponder ao manual.

**Changes:**
```css
.btn {
  font-family: var(--font-display);
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 12px;
  /* resto mantém */
}

.btn-primary {
  background: var(--verde);
  color: var(--branco);
  box-shadow: 0 4px 14px rgba(127, 176, 105, 0.35);
}

.btn-primary:hover {
  background: var(--verde-escuro);
  box-shadow: 0 8px 20px rgba(127, 176, 105, 0.45);
}

.btn-secondary {
  background: var(--azul-bg);
  color: var(--azul-uemg);
  border: none;
}

.btn-secondary:hover {
  background: var(--azul-uemg);
  color: var(--branco);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--azul-uemg);
  color: var(--azul-uemg);
}
```

**Validation:**
- Testar todos os estados: normal, hover, focus, active
- Verificar acessibilidade de contraste
- Testar em diferentes tamanhos de tela

---

#### Task 3.2: Update Card Styles
**File:** `portal/src/style.css`
**Priority:** MEDIUM

**Description:**
Ajustar estilos de cards conforme manual.

**Changes:**
```css
.accordion-item,
.quiz-card,
.desafio-card,
.latest-card {
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  /* resto mantém */
}
```

**Validation:**
- Verificar padding consistente em todos os cards
- Verificar border-radius
- Verificar shadow

---

#### Task 3.3: Update Badge Styles
**File:** `portal/src/style.css`
**Priority:** MEDIUM

**Description:**
Atualizar badges conforme manual.

**Changes:**
```css
.accordion-badge,
.latest-badge {
  padding: 6px 14px;
  border-radius: 20px;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.8rem;
}

/* Estados de badge */
.badge-blue {
  background: var(--azul-bg);
  color: var(--azul-uemg);
}

.badge-green {
  background: var(--verde-bg);
  color: var(--verde-escuro);
}

.badge-yellow {
  background: var(--amarelo-bg);
  color: var(--amarelo-escuro);
}

.badge-red {
  background: #FDEAEA;
  color: var(--vermelho-uemg);
}

/* Aplicar nos badges existentes */
.accordion-badge {
  background: var(--gradient-secondary);
  color: white;
}

.latest-badge {
  background: linear-gradient(135deg, var(--amarelo) 0%, var(--amarelo-escuro) 100%);
  color: white;
}
```

**Validation:**
- Verificar visibilidade de badges em diferentes fundos
- Confirmar contraste adequado

---

#### Task 3.4: Update Form Styles
**File:** `portal/src/style.css`
**Priority:** MEDIUM

**Description:**
Atualizar estilos de inputs conforme manual.

**Changes:**
```css
.input-demo,
input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid var(--cinza-claro);
  border-radius: 10px;
  font-family: var(--font-body);
  font-size: 1rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--azul-uemg);
}
```

**Validation:**
- Testar foco em inputs
- Verificar que focus ring está visível

---

#### Task 3.5: Update Quiz Option Styles
**File:** `portal/src/style.css`
**Priority:** MEDIUM

**Description:**
Atualizar estilos de opções de quiz.

**Changes:**
```css
.quiz-option {
  font-family: var(--font-body);
  border: 2px solid var(--cinza-claro);
  border-radius: 10px;
}

.quiz-option:hover:not(:disabled) {
  border-color: var(--azul-uemg);
}

.quiz-option::before {
  background: var(--gradient-secondary);
}

.quiz-option.correct {
  background: linear-gradient(135deg, var(--verde-bg) 0%, #c3e6cb 100%);
  border-color: var(--verde);
}

.quiz-option.incorrect {
  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
  border-color: var(--vermelho-uemg);
}
```

**Validation:**
- Testar interação de quiz
- Verificar estados correto/incorreto
- Verificar feedback visual

---

### Phase 4: Spacing & Layout Adjustments

#### Task 4.1: Update Spacing Variables
**File:** `portal/src/style.css`
**Priority:** LOW

**Description:**
Ajustar variáveis de espaçamento para corresponder ao manual.

**Changes:**
```css
/* ANTES */
--spacing-lg: 2rem;    /* 32px */
--spacing-xl: 3rem;    /* 48px */

/* DEPOIS */
--spacing-lg: 2.5rem;  /* 40px */
--spacing-xl: 4rem;    /* 64px */
--spacing-2xl: 6.25rem; /* 100px */
```

**Validation:**
- Verificar espaçamento em seções
- Confirmar respiração visual adequada

---

#### Task 4.2: Update Border Radius
**File:** `portal/src/style.css`
**Priority:** LOW

**Description:**
Ajustar border-radius conforme manual.

**Changes:**
```css
/* ANTES */
--border-radius-lg: 16px;

/* DEPOIS */
--border-radius-lg: 20px;
--border-radius-xl: 30px;
```

**Validation:**
- Verificar cards grandes
- Verificar modais/overlays (se existirem)

---

### Phase 5: Sidebar & Navigation

#### Task 5.1: Update Sidebar Colors
**File:** `portal/src/style.css`
**Priority:** HIGH

**Description:**
Atualizar cores da sidebar para usar paleta UEMG.

**Changes:**
```css
.sidebar {
  background: var(--gradient-primary);
  /* Atualizar gradiente interno::before com cores UEMG */
}

.sidebar-link {
  color: rgba(255, 255, 255, 0.8);
}

.sidebar-link::before {
  background: var(--gradient-secondary);
}

.sidebar-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-link.active {
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: inset 0 0 20px rgba(127, 176, 105, 0.2);
}
```

**Validation:**
- Verificar visibilidade de texto
- Testar estados hover/active
- Verificar em mobile

---

### Phase 6: Accessibility & Polish

#### Task 6.1: Update Focus States
**File:** `portal/src/style.css`
**Priority:** HIGH

**Description:**
Atualizar focus states para usar cores UEMG.

**Changes:**
```css
.btn:focus-visible,
.quiz-option:focus-visible,
.sidebar-link:focus-visible,
.accordion-header:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 3px solid var(--verde);
  outline-offset: 3px;
  box-shadow: 0 0 0 3px rgba(127, 176, 105, 0.1);
}
```

**Validation:**
- Testar navegação por teclado
- Verificar visibilidade de focus ring em todos os fundos
- Testar com leitores de tela

---

#### Task 6.2: Add Slogan/Accent Elements
**File:** `portal/index.html`
**Priority:** MEDIUM

**Description:**
Adicionar elementos com fonte Kalam onde apropriado (slogan, anotações).

**Changes:**
```html
<!-- Adicionar classe .slogan onde aparecer "Conhecimento que conecta" -->
<p class="hero-subtitle slogan">Conhecimento que conecta</p>
```

```css
/* Adicionar estilo */
.slogan {
  font-family: var(--font-accent);
  font-size: 2rem;
  color: var(--verde);
  font-weight: 400;
}
```

**Validation:**
- Verificar que slogan usa Kalam
- Verificar cor verde
- Verificar tamanho 2rem

---

#### Task 6.3: Update Animations
**File:** `portal/src/style.css`
**Priority:** LOW

**Description:**
Verificar que animações respeitam `prefers-reduced-motion`.

**Changes:**
Código já implementado - apenas validação necessária.

**Validation:**
- Ativar "Reduce motion" no sistema
- Verificar que animações são desabilitadas

---

### Phase 7: Testing & Validation

#### Task 7.1: Cross-Browser Testing
**File:** N/A
**Priority:** HIGH

**Description:**
Testar portal em diferentes navegadores.

**Validation:**
- [ ] Chrome (desktop + mobile)
- [ ] Firefox
- [ ] Safari (se possível)
- [ ] Edge
- Verificar que fontes carregam corretamente
- Verificar que cores estão consistentes
- Verificar que layout não quebra

---

#### Task 7.2: Accessibility Audit
**File:** N/A
**Priority:** HIGH

**Description:**
Executar auditoria de acessibilidade.

**Validation:**
- [ ] Lighthouse > Accessibility score 90+
- [ ] Contraste WCAG AA em todos os elementos
- [ ] Navegação por teclado funciona
- [ ] Leitores de tela funcionam

---

#### Task 7.3: 60+ User Testing
**File:** N/A
**Priority:** MEDIUM

**Description:**
Testar com usuários do público-alvo.

**Validation:**
- [ ] Fontes são legíveis
- [ ] Botões são clicáveis facilmente (touch targets)
- [ ] Cores são agradáveis/não cansam
- [ ] Navegação é intuitiva

---

## Execution Order

**Phase 1 (Obrigatório primeiro):**
1. Task 1.1 → Update Google Fonts Import (HTML files)
2. Task 1.2 → Update CSS Variables - Fonts

**Phase 2 (Fundação visual):**
3. Task 2.1 → Update Primary Colors
4. Task 2.2 → Update Background Colors
5. Task 2.3 → Update Text Colors
6. Task 2.4 → Update Gradients

**Phase 3 (Componentes visuais):**
7. Task 1.3 → Apply Font Variables Throughout CSS
8. Task 3.1 → Update Button Styles
9. Task 3.2 → Update Card Styles
10. Task 5.1 → Update Sidebar Colors

**Phase 4 (Refinamento):**
11. Task 1.4 → Update Typography Scale
12. Task 3.3 → Update Badge Styles
13. Task 3.4 → Update Form Styles
14. Task 3.5 → Update Quiz Option Styles
15. Task 6.2 → Add Slogan/Accent Elements

**Phase 5 (Polimento):**
16. Task 2.5 → Update Shadows
17. Task 4.1 → Update Spacing Variables
18. Task 4.2 → Update Border Radius
19. Task 6.1 → Update Focus States

**Phase 6 (Validação):**
20. Task 7.1 → Cross-Browser Testing
21. Task 7.2 → Accessibility Audit
22. Task 7.3 → 60+ User Testing (opcional mas recomendado)

---

## Affected Files

### HTML Files (4 arquivos)
1. `/home/shiv/repos/SEMINARIO/portal/index.html`
2. `/home/shiv/repos/SEMINARIO/portal/aulas.html`
3. `/home/shiv/repos/SEMINARIO/portal/pratique.html`
4. `/home/shiv/repos/SEMINARIO/portal/comunidade.html`

**Changes:** Google Fonts import (Task 1.1)

### CSS Files (1 arquivo principal)
1. `/home/shiv/repos/SEMINARIO/portal/src/style.css`

**Changes:** Todas as outras tasks (1.2-6.1)

### Total: 5 arquivos

---

## Risks & Mitigations

### Risk 1: Quebra de Layout
**Description:** Mudanças em font-size podem quebrar layouts existentes.

**Mitigation:**
- Testar em todas as páginas após Phase 1
- Ajustar line-height se necessário
- Verificar mobile first

**Severity:** MEDIUM

---

### Risk 2: Performance - Font Loading
**Description:** Carregar 3 font families pode aumentar tempo de carregamento.

**Mitigation:**
- Usar `font-display: swap` no Google Fonts
- Considerar font subsetting (apenas weights necessários)
- Adicionar `preconnect` (já implementado)

**Severity:** LOW

---

### Risk 3: Contraste Insuficiente
**Description:** Algumas combinações da paleta UEMG podem não passar WCAG AA.

**Mitigation:**
- Validar todos os pares com ferramenta de contraste
- Ajustar shades se necessário (ex: usar `--cinza-escuro` em vez de `--cinza-texto` em fundos claros)
- Documentar exceções

**Severity:** HIGH

---

### Risk 4: Inconsistência entre Páginas
**Description:** Portal tem 4 páginas HTML que precisam ficar consistentes.

**Mitigation:**
- Fazer mudanças apenas em `style.css` (single source of truth)
- Testar todas as 4 páginas após cada phase
- Verificar que componentes compartilhados usam mesmas classes

**Severity:** MEDIUM

---

### Risk 5: Kalam não suporta caracteres especiais
**Description:** Kalam pode não ter suporte completo a acentos PT-BR.

**Mitigation:**
- Testar renderização de "ã", "ç", "ó", etc.
- Ter fallback para cursiva genérica
- Se necessário, usar Caveat como fallback

**Severity:** LOW

**Testing Plan:**
```html
<!-- Testar esta string -->
<p style="font-family: 'Kalam'">Inclusão não é só conexão: é transformação!</p>
```

---

### Risk 6: Glass Effects Conflitam com Nova Paleta
**Description:** Glass effects atuais usam rgba com cores Tailwind.

**Mitigation:**
- Atualizar variáveis de glass para usar cores UEMG:
  ```css
  --glass-bg: rgba(255, 255, 255, 0.85);
  --glass-border: rgba(74, 111, 165, 0.3);
  ```
- Testar legibilidade de texto sobre glass
- Ajustar opacidade se necessário

**Severity:** LOW

---

## Dependencies

### External Dependencies
1. **Google Fonts API**
   - Montserrat: https://fonts.google.com/specimen/Montserrat
   - Open Sans: https://fonts.google.com/specimen/Open+Sans
   - Kalam: https://fonts.google.com/specimen/Kalam
   - **Status:** ✅ Todas disponíveis

2. **Browser Support**
   - CSS Variables: 97% global support
   - Backdrop-filter (glass): 95% global support
   - **Status:** ✅ Adequado

### Internal Dependencies
1. **Manual de Identidade Visual** (`/manual_identidade_visual.html`)
   - **Status:** ✅ Completo e aprovado

2. **Wireframe** (`/wireframe_portal.html`)
   - **Status:** ✅ Completo

3. **Decisão sobre Fonte Cursiva** (`/opcoes_fonte_cursiva.html`)
   - **Status:** ✅ Kalam escolhida (em vez de Caveat do manual)

### Build Dependencies
- Vite (bundler)
- **Status:** ✅ Já configurado

---

## Open Questions

### Q1: Criar variante do Manual com Kalam?
**Question:** O manual usa Caveat, mas vamos implementar Kalam. Devemos atualizar o manual também?

**Options:**
- A) Sim, atualizar `manual_identidade_visual.html` para usar Kalam
- B) Não, manter manual como documentação histórica
- C) Criar versão v1.1 do manual com Kalam

**Recommendation:** Opção A - atualizar para consistência

---

### Q2: Sidebar Color no Wireframe
**Question:** Wireframe não especifica cor exata da sidebar. Usar gradiente azul UEMG?

**Options:**
- A) Azul sólido `--azul-escuro`
- B) Gradiente `--gradient-primary`
- C) Azul com pattern overlay (como no manual)

**Recommendation:** Opção B (já implementado, apenas atualizar cores do gradiente)

---

### Q3: Glassmorphism Intensity
**Question:** Quanto blur usar no glass effect? Manual não especifica.

**Current:** `backdrop-filter: blur(10px)`

**Options:**
- A) Manter 10px
- B) Reduzir para 6px (mais sutil)
- C) Aumentar para 15px (mais dramático)

**Recommendation:** Opção A (já implementado e funciona bem)

---

### Q4: Ilustrações Placeholder
**Question:** Portal tem placeholders para ilustrações. Usar ilustrações do estilo flat do manual?

**Options:**
- A) Criar ilustrações flat custom
- B) Usar undraw.co com customização de cores
- C) Manter placeholders por enquanto

**Recommendation:** Opção C para este plano (focar em identidade visual primeiro)

---

### Q5: Logo UEMG
**Question:** Sidebar referencia `/images/logo-uemg.png` que não existe no repo. Onde obter?

**Status:** ⚠️ BLOCKER

**Action Needed:**
- Obter logo oficial UEMG
- Adicionar em `/portal/public/images/`
- Ou usar placeholder temporário

---

### Q6: WhatsApp Group Link
**Question:** Botão "Entrar no Grupo" (`comunidade.html`) tem `href="#"`. Qual o link correto?

**Status:** ⚠️ Precisa de input do usuário

**Action Needed:**
- Obter link do grupo do WhatsApp
- Atualizar em `comunidade.html`

---

## Assumptions

1. **Kalam suporta PT-BR:** Assumimos que Kalam renderiza corretamente todos os caracteres acentuados do português brasileiro. Será validado em Task 7.1.

2. **Paleta UEMG é acessível:** Assumimos que as cores do manual passam WCAG AA. Será validado em Task 7.2.

3. **Wireframe é autoridade:** Em caso de conflito entre manual e wireframe, wireframe tem precedência (é mais recente).

4. **Portal não terá mais páginas:** Plano cobre apenas as 4 páginas existentes (index, aulas, pratique, comunidade).

5. **Vite build funciona:** Assumimos que build do Vite não quebrará com as mudanças de CSS.

6. **Mobile-first:** Layout existente é mobile-first e continuará sendo.

7. **JavaScript não afetado:** Mudanças são apenas CSS/HTML, não afetam `main.js`.

8. **Imagens/SVGs externos:** Ilustrações e logos serão fornecidos separadamente (fora do escopo deste plano).

---

## Confidence

**HIGH**

**Reasoning:**
- ✅ Manual de identidade visual é completo e detalhado
- ✅ Wireframe fornece referência visual clara
- ✅ Portal atual tem estrutura sólida (HTML semântico, CSS bem organizado)
- ✅ Mudanças são incrementais e testáveis
- ✅ Todas as fontes estão disponíveis no Google Fonts
- ⚠️ Único risco moderado: contraste de cores (mitigável com testes)
- ⚠️ Dependência externa: logo UEMG (bloqueador menor)

**Estimated Effort:**
- Development: 8-12 horas
- Testing: 3-4 horas
- **Total: 11-16 horas**

**Complexity:** MEDIUM
- Maioria das mudanças são substituições de valores CSS
- Requer atenção a detalhes de acessibilidade
- Nenhuma mudança estrutural de HTML/layout

---

## Next Steps

1. **Revisar este plano com o usuário**
   - Confirmar decisão: Kalam vs Caveat
   - Resolver open questions (especialmente Q5: logo UEMG)
   - Aprovar ordem de execução

2. **Setup**
   - Criar feature branch: `git checkout -b feature/visual-identity`
   - Backup do CSS atual: `cp portal/src/style.css portal/src/style.css.backup`

3. **Executar Phase 1**
   - Tasks 1.1 e 1.2
   - Testar visualmente
   - Commit intermediário

4. **Continuar phases sequencialmente**
   - Commit após cada phase
   - Testar em todas as 4 páginas
   - Documentar issues

5. **Final Testing (Phase 7)**
   - Cross-browser
   - Accessibility audit
   - User testing (se possível)

6. **Deploy**
   - Merge para main
   - Deploy via Vercel
   - Monitorar erros

---

**Última atualização:** 2025-12-12
**Versão do plano:** 1.0
**Status:** READY FOR REVIEW
