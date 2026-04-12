# Portal Visual Identity Plan Summary

**Alinhamento completo da identidade visual UEMG com substituição Kalam→Caveat e migração de paleta Tailwind para institucional**

## Version
v1.0 (2025-12-12)

## Key Findings

1. **100% das cores primárias precisam ser substituídas** - Portal usa paleta Tailwind (blues #2563EB, emeralds #10B981) enquanto manual especifica paleta institucional UEMG (azul #4A6FA5, verde #7FB069)

2. **Tipografia completamente diferente** - Portal usa apenas Inter; manual requer trio Montserrat (display) + Open Sans (corpo) + Kalam (accent cursiva, substituindo Caveat do manual original)

3. **Estrutura sólida já implementada** - Portal tem glass effects, gradientes, sidebar e responsividade funcionando; mudanças são principalmente substituições de valores CSS

4. **Decisão crítica confirmada** - Usar **Kalam** como fonte cursiva em vez de Caveat do manual, conforme análise prévia em `opcoes_fonte_cursiva.html`

5. **Acessibilidade requer validação** - Nova paleta UEMG precisa de teste de contraste WCAG AA, especialmente cinza-texto (#555) vs cinza-escuro (#333)

## Phases

### Phase 1: Typography Update (4 tasks)
- Importar Google Fonts (Montserrat, Open Sans, Kalam)
- Criar variáveis CSS de fonte
- Aplicar fontes em seletores corretos
- Ajustar escala tipográfica (H1: 48px, corpo: 17px)

### Phase 2: Color Palette Update (5 tasks)
- Substituir cores primárias (azul UEMG, verde, amarelo)
- Atualizar backgrounds (azul-bg, verde-bg, amarelo-bg, cinza-bg)
- Corrigir cores de texto (cinza-escuro, cinza-texto, cinza-médio)
- Redesenhar gradientes com paleta UEMG
- Ajustar sombras para tons institucionais

### Phase 3: Component Styling (5 tasks)
- Botões: padding 14/28px, fonte Montserrat, verde primário
- Cards: padding 25px, border-radius 16px
- Badges: 4 estados (blue, green, yellow, red) com cores UEMG
- Forms: border-radius 10px, focus azul UEMG
- Quiz options: gradientes verde/vermelho UEMG

### Phase 4: Spacing & Layout (2 tasks)
- Ajustar LG (40px) e XL (64px), adicionar 2XL (100px)
- Border-radius LG: 20px, adicionar XL: 30px

### Phase 5: Sidebar & Navigation (1 task)
- Gradiente azul UEMG, active state com glow verde

### Phase 6: Accessibility & Polish (3 tasks)
- Focus states com verde #7FB069
- Adicionar classe .slogan com Kalam
- Validar prefers-reduced-motion

### Phase 7: Testing & Validation (3 tasks)
- Cross-browser (Chrome, Firefox, Safari, Edge)
- Lighthouse Accessibility 90+
- User testing com público 60+

**Total:** 23 tasks organizadas em 7 phases

## Decisions Needed

### CRITICAL (Bloqueiam implementação)
- **Logo UEMG:** Obter arquivo oficial `/images/logo-uemg.png` para sidebar (referenciado mas não existe no repo)

### HIGH PRIORITY
- **Kalam vs Caveat:** Confirmar decisão de usar Kalam (recomendação: SIM, conforme análise prévia)
- **Atualizar manual:** Mudar `manual_identidade_visual.html` para usar Kalam também? (recomendação: SIM para consistência)

### MEDIUM PRIORITY
- **Link WhatsApp:** Qual URL do grupo para botão "Entrar no Grupo" em `comunidade.html`?
- **Ilustrações:** Manter placeholders ou criar ilustrações flat style? (recomendação: manter placeholders neste plano)

### LOW PRIORITY
- **Glass blur intensity:** Manter 10px ou ajustar? (recomendação: manter 10px)

## Blockers

1. **Logo UEMG ausente**
   - Severity: MEDIUM
   - Impact: Sidebar mostrará placeholder vazio
   - Workaround: Usar placeholder temporário enquanto obtém logo oficial
   - Owner: User needs to provide

2. **Kalam character support não validado**
   - Severity: LOW
   - Impact: Possível renderização incorreta de acentos PT-BR
   - Workaround: Fallback para Caveat ou cursive genérica
   - Owner: Task 7.1 will validate

## Next Step

**Review este plano e resolver open questions Q5 (logo UEMG) e Q1 (atualizar manual com Kalam)**

Após aprovação, executar:
```bash
git checkout -b feature/visual-identity
cp portal/src/style.css portal/src/style.css.backup
# Começar Phase 1: Task 1.1
```

**Estimated Timeline:**
- Development: 8-12 hours
- Testing: 3-4 hours
- **Total: 11-16 hours** (1-2 dias de trabalho)

---

*Confidence: **HIGH*** | *Complexity: **MEDIUM*** | *Risk: **LOW-MEDIUM***
