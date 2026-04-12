# Prompt: Aplicar Estilos do Wireframe ao Portal

## Objetivo
Aplicar fielmente os estilos visuais definidos em `@wireframe_portal.html` ao portal existente, mantendo:
- Layout com sidebar (não mudar para header horizontal)
- As 4 páginas atuais: index.html, aulas.html, pratique.html, comunidade.html

## Contexto
- Wireframe de referência: `/home/shiv/repos/SEMINARIO/wireframe_portal.html`
- Portal atual: `/home/shiv/repos/SEMINARIO/portal/`
- CSS principal: `/home/shiv/repos/SEMINARIO/portal/src/style.css`
- Identidade visual já aplicada: Montserrat, Open Sans, Kalam, cores UEMG

## Elementos a Implementar do Wireframe

### 1. Hero Section (index.html)
Adicionar elementos que faltam baseado no wireframe:

```html
<!-- Badge no topo do hero -->
<div class="hero-badge">✨ Desde 2009 transformando vidas</div>

<!-- Slogan com fonte Kalam -->
<p class="slogan">Conhecimento que conecta</p>

<!-- Botões lado a lado -->
<div class="hero-buttons">
  <a href="/aulas.html" class="btn btn-primary">📅 Ver Aulas</a>
  <a href="/comunidade.html" class="btn btn-secondary">💬 Comunidade</a>
</div>
```

### 2. Stats Bar (index.html)
Transformar os 3 stats atuais em barra horizontal com 4 items:

```html
<section class="stats-bar">
  <div class="stat-item">
    <div class="stat-number">16+</div>
    <div class="stat-label">Anos de projeto</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">500+</div>
    <div class="stat-label">Pessoas capacitadas</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">30</div>
    <div class="stat-label">Vagas por turma</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">100%</div>
    <div class="stat-label">Gratuito</div>
  </div>
</section>
```

### 3. Features Section (index.html)
Adicionar nova seção após stats:

```html
<section class="features-section">
  <div class="section-header">
    <h2>O que você vai aprender</h2>
    <p class="subtitle slogan">Cada passo é uma conquista!</p>
  </div>
  <div class="features-grid">
    <div class="feature-card">
      <div class="feature-icon" style="background: var(--azul-bg);">💻</div>
      <h3>Informática Básica</h3>
      <p>Computador, mouse, teclado e navegação na internet</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background: var(--verde-bg);">📱</div>
      <h3>Comunicação Digital</h3>
      <p>WhatsApp, e-mail e videochamadas com a família</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon" style="background: var(--amarelo-bg);">🔒</div>
      <h3>Segurança Online</h3>
      <p>Proteja-se de golpes e navegue com tranquilidade</p>
    </div>
  </div>
</section>
```

### 4. Módulos com Status (aulas.html)
Transformar accordion em cards de módulo:

```html
<div class="module-card">
  <div class="module-header">
    <div class="module-number">1</div>
    <div class="module-info">
      <h3>Fundamentos Digitais</h3>
      <span>Aulas 01-04</span>
    </div>
    <span class="module-status status-complete">✓ Concluído</span>
  </div>
  <div class="module-body">
    <ul class="lesson-list">
      <li class="lesson-item lesson-complete">
        <div class="lesson-icon">✓</div>
        <div class="lesson-info">
          <h4>Aula 01 - Primeiros Passos</h4>
          <span>Computador, mouse e teclado</span>
        </div>
        <a href="/aulas/aula_01.pdf" class="btn btn-secondary btn-sm">Baixar PDF</a>
      </li>
      <!-- mais aulas... -->
    </ul>
  </div>
</div>
```

### 5. Footer Expandido (todas as páginas)
```html
<footer class="site-footer">
  <div class="footer-content">
    <div class="footer-brand">
      <h3>Portal UEMG - Inclusão Digital</h3>
      <p class="slogan">Conhecimento que conecta</p>
      <p>Um projeto de extensão da UEMG Frutal que desde 2009 capacita adultos 60+ para o mundo digital.</p>
    </div>
    <div class="footer-column">
      <h4>Navegação</h4>
      <a href="/">Início</a>
      <a href="/aulas.html">Aulas</a>
      <a href="/pratique.html">Pratique</a>
      <a href="/comunidade.html">Comunidade</a>
    </div>
    <div class="footer-column">
      <h4>Contato</h4>
      <a href="mailto:inclusaodigital@uemg.br">Email</a>
      <a href="tel:+551738431234">Telefone</a>
    </div>
    <div class="footer-column">
      <h4>UEMG Frutal</h4>
      <a href="https://www.uemg.br/unidade-frutal" target="_blank">Site Oficial</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 UEMG Frutal - Programa de Inclusão Digital</span>
    <div class="footer-logos">
      <img src="/images/logo-uemg.png" alt="UEMG" class="footer-logo">
      <img src="/images/paex-logo.png" alt="PAEx" class="footer-logo">
    </div>
  </div>
</footer>
```

### 6. Page Headers Coloridos
- aulas.html: background verde-bg
- pratique.html: background amarelo-bg
- comunidade.html: background gradiente azul-verde

## CSS a Adicionar (style.css)

```css
/* Hero Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  background: var(--verde-bg);
  color: var(--verde-escuro);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-xl);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: var(--spacing-md);
}

/* Stats Bar */
.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--branco);
  border-top: 1px solid var(--cinza-claro);
  border-bottom: 1px solid var(--cinza-claro);
}

.stat-item {
  text-align: center;
  padding: var(--spacing-md);
}

.stat-item .stat-number {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 2.5rem;
  color: var(--azul-uemg);
  line-height: 1;
}

.stat-item .stat-label {
  font-size: 0.95rem;
  color: var(--cinza-texto);
  margin-top: var(--spacing-xs);
}

/* Features Section */
.features-section {
  padding: var(--spacing-xl) var(--spacing-lg);
  background: var(--cinza-bg);
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.section-header h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 2rem;
  color: var(--azul-escuro);
  margin-bottom: var(--spacing-xs);
}

.section-header .subtitle {
  font-family: var(--font-accent);
  font-size: 1.4rem;
  color: var(--verde);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

.feature-card {
  background: var(--branco);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.feature-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto var(--spacing-md);
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.feature-card h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--azul-escuro);
  margin-bottom: var(--spacing-xs);
}

.feature-card p {
  font-size: 0.95rem;
  color: var(--cinza-texto);
}

/* Module Cards */
.module-card {
  background: var(--branco);
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.module-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--azul-bg);
}

.module-number {
  width: 45px;
  height: 45px;
  background: var(--azul-uemg);
  color: var(--branco);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.2rem;
}

.module-info h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--azul-escuro);
}

.module-info span {
  font-size: 0.9rem;
  color: var(--cinza-texto);
}

.module-status {
  margin-left: auto;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-xl);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.8rem;
}

.status-complete {
  background: var(--verde-bg);
  color: var(--verde-escuro);
}

.status-current {
  background: var(--amarelo);
  color: var(--cinza-escuro);
}

.status-upcoming {
  background: var(--cinza-claro);
  color: var(--cinza-texto);
}

.module-body {
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: 1px solid var(--cinza-claro);
}

.lesson-list {
  list-style: none;
}

.lesson-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--cinza-claro);
}

.lesson-item:last-child {
  border-bottom: none;
}

.lesson-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
}

.lesson-complete .lesson-icon {
  background: var(--verde-bg);
  color: var(--verde);
}

.lesson-current .lesson-icon {
  background: var(--amarelo);
}

.lesson-upcoming .lesson-icon {
  background: var(--cinza-claro);
  color: var(--cinza-medio);
}

.lesson-info {
  flex: 1;
}

.lesson-info h4 {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1rem;
  color: var(--azul-escuro);
}

.lesson-info span {
  font-size: 0.85rem;
  color: var(--cinza-texto);
}

/* Footer Expandido */
.site-footer {
  padding: var(--spacing-lg);
  background: var(--cinza-escuro);
  color: var(--branco);
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
}

.footer-brand h3 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: var(--spacing-xs);
}

.footer-brand .slogan {
  font-family: var(--font-accent);
  color: var(--verde-claro);
  font-size: 1.1rem;
}

.footer-brand p {
  font-size: 0.9rem;
  color: var(--cinza-medio);
  margin-top: var(--spacing-sm);
}

.footer-column h4 {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-sm);
  color: var(--cinza-medio);
}

.footer-column a {
  display: block;
  color: var(--branco);
  text-decoration: none;
  font-size: 0.95rem;
  padding: 4px 0;
  transition: color 0.2s;
}

.footer-column a:hover {
  color: var(--verde-claro);
}

.footer-bottom {
  padding-top: var(--spacing-md);
  border-top: 1px solid rgba(255,255,255,0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--cinza-medio);
}

.footer-logos {
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
}

.footer-logo {
  height: 40px;
  width: auto;
  opacity: 0.8;
}

/* Page Headers Coloridos */
.page-header.verde {
  background: var(--verde-bg);
}

.page-header.amarelo {
  background: var(--amarelo-bg);
}

.page-header.gradiente {
  background: linear-gradient(135deg, var(--azul-bg) 0%, var(--verde-bg) 100%);
}

/* Responsivo */
@media (max-width: 900px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-bar {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-content {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .stats-bar {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }
}
```

## Arquivos a Modificar
1. `/home/shiv/repos/SEMINARIO/portal/index.html` - Hero, Stats, Features, Footer
2. `/home/shiv/repos/SEMINARIO/portal/aulas.html` - Module cards, Page header verde, Footer
3. `/home/shiv/repos/SEMINARIO/portal/pratique.html` - Page header amarelo, Footer
4. `/home/shiv/repos/SEMINARIO/portal/comunidade.html` - Page header gradiente, Footer
5. `/home/shiv/repos/SEMINARIO/portal/src/style.css` - Adicionar CSS acima

## Critérios de Sucesso
- [ ] Hero com badge, slogan Kalam, botões lado a lado
- [ ] Stats bar horizontal com 4 items
- [ ] Features section com 3 cards
- [ ] Aulas com module cards e status badges
- [ ] Footer expandido em 4 colunas com logos
- [ ] Page headers coloridos por página
- [ ] Responsivo funcionando
- [ ] Build passa sem erros

## Output
Salvar resumo em: `.prompts/004-wireframe-implementation/SUMMARY.md`
