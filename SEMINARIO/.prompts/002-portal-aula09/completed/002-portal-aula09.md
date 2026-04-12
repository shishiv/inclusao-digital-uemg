# Prompt 002: Criar Aula 09 Interativa

<objective>
Criar Aula 09 interativa em HTML com slides, tutorial do portal, quiz e tela de parabens.

**Purpose:** Ultima aula do curso - celebracao e ensino do portal aos alunos
**Output:** Arquivo HTML standalone com 10 slides interativos
</objective>

<context>
**Plano completo:** Leia `/home/shiv/repos/SEMINARIO/.claude/plans/merry-popping-kay.md`
**Conteudo da aula:** `/home/shiv/repos/SEMINARIO/AULAS/aula_09.md`
**Estilo de referencia:** `/home/shiv/repos/SEMINARIO/portal/src/style.css`
**URL do portal:** `https://inclusao-digital-uemg.vercel.app` (ou similar)
</context>

<requirements>

## Estrutura: 10 Slides

1. **Titulo** - "Aula 09: Nossa Jornada Digital"
   - Logo UEMG
   - Subtitulo: "Revisao, Celebracao e Proximos Passos"
   - Instrutor: Myke Matos dos Santos
   - Data: 12 de Dezembro de 2025
   - Botao "Comecar a Aula"

2. **Agenda** - "Nosso Encontro Final"
   - 4 itens em grid:
     1. Revisao Geral - tira-duvidas
     2. Portal do Aluno - apresentacao do site
     3. Nossa Comunidade - grupo WhatsApp
     4. A Grande Formatura - certificados

3. **Revisao** - "Tira-Duvidas Final"
   - Texto: "Qual tema voces querem relembrar?"
   - 4 botoes de topicos clicaveis (apenas visuais):
     - WhatsApp
     - Google Fotos
     - Seguranca
     - Gov.br / PIX
   - Dica: "Nao existem perguntas bobas!"

4. **Portal Intro** - "Apresentando o Portal do Aluno"
   - Mockup de browser com preview do portal
   - Lista de recursos:
     - Rever todas as aulas
     - Exercicios interativos
     - Links diretos para sites uteis
   - URL do portal

5. **Tour Parte A** - "Menu Lateral (Sidebar)"
   - Demonstracao visual do menu:
     - Inicio - Pagina principal
     - Aulas - Todas as aulas em PDF
     - Pratique - Quizzes e desafios
     - Comunidade - Grupo e links uteis

6. **Tour Parte B** - "Como Baixar os PDFs"
   - Demonstracao do accordion:
     - Clique na aula para expandir
     - Botao "Baixar PDF"
   - Visual de accordion expandido

7. **Exercicio** - "Quiz: Teste Seu Conhecimento!"
   - Pergunta: "Qual botao do menu leva voce para os quizzes?"
   - 3 opcoes:
     - Inicio (incorreta)
     - Pratique (CORRETA)
     - Aulas (incorreta)
   - Feedback imediato ao clicar

8. **WhatsApp** - "Nossa Comunidade de Apoio"
   - Icone grande do WhatsApp
   - Lista de propositos:
     - Tirar duvidas
     - Compartilhar conquistas
     - Manter contato
     - Um ajuda o outro!
   - Nota: "O QR Code sera mostrado na tela do instrutor!"

9. **Formatura** - "Cerimonia de Formatura"
   - Texto: "Voces conseguiram!"
   - 3 badges de conquista:
     - Cidadaos Digitais
     - Superaram Desafios
     - Prontos pro Futuro
   - Citacao inspiradora

10. **Parabens!** - Tela Final de Celebracao
    - Animacao de CONFETTI
    - Titulo grande: "Parabens, Formandos!"
    - Mensagem: "O futuro e digital, e agora, ele tambem e de voces."
    - Dicas finais (continuem curiosos, praticando, se ajudando)
    - Preview do certificado
    - Botao "Rever Apresentacao"

## Componentes Obrigatorios

### Barra de Progresso (topo)
```html
<div class="progress-container">
  <div class="progress-bar" id="progressBar"></div>
  <span class="progress-text">1 / 10</span>
</div>
```

### Navegacao
- Botao "Anterior" (desabilitado no slide 1)
- Dots clicaveis (10 dots)
- Botao "Proximo" (desabilitado no slide 10)
- Suporte a teclado: ArrowLeft, ArrowRight, Space

### Quiz (Slide 7)
- Opcoes clicaveis
- Feedback visual: verde (correto), vermelho (incorreto)
- Desabilitar apos resposta

### Confetti (Slide 10)
- Animacao de particulas coloridas caindo
- Cores: #2563EB, #10B981, #F59E0B, #EF4444, #8B5CF6
- Disparar ao entrar no slide

## Acessibilidade (Idosos 60+)

- Fontes: minimo 18px corpo, 32px+ titulos
- Botoes: minimo 48px altura, padding generoso
- Contraste: texto escuro em fundo claro
- Navegacao por teclado funcional
- Indicadores visuais claros

## Estilo Visual

Usar cores vibrantes:
- Primary: #2563EB (azul)
- Secondary: #10B981 (verde)
- Accent: #F59E0B (amarelo)
- Background: gradientes suaves
- Cards: sombras, bordas arredondadas (16px)

</requirements>

<implementation>

HTML standalone com CSS e JS inline (arquivo unico):

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aula 09: Nossa Jornada Digital</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* CSS completo inline */
  </style>
</head>
<body>
  <!-- Progress Bar -->
  <!-- Slides Container -->
  <!-- Navigation -->

  <script>
    // JavaScript completo inline
  </script>
</body>
</html>
```

### JavaScript Necessario

```javascript
let currentSlide = 1;
const totalSlides = 10;

function nextSlide() { /* ... */ }
function prevSlide() { /* ... */ }
function goToSlide(n) { /* ... */ }
function updateProgress() { /* ... */ }
function updateNavButtons() { /* ... */ }
function checkAnswer(button) { /* ... */ }
function startConfetti() { /* ... */ }
function restartPresentation() { /* ... */ }

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
  else if (e.key === 'ArrowLeft') prevSlide();
});
```

</implementation>

<output>
Criar arquivos:
1. `/home/shiv/repos/SEMINARIO/AULAS/aula_09.html` - Versao principal
2. `/home/shiv/repos/SEMINARIO/portal/public/aulas/aula_09.html` - Copia identica para Vercel

Modificar arquivo:
3. `/home/shiv/repos/SEMINARIO/portal/aulas.html` - Adicionar item Aula 09 no accordion com link para versao interativa

O item da Aula 09 no accordion deve ter:
- Numero: 09
- Titulo: Nossa Jornada Digital
- Badge: FINAL (ao inves de NOVA)
- Classe: .new (para destaque)
- Dois botoes: "Aula Interativa" (link para HTML) e "Baixar PDF" (link para PDF)
</output>

<verification>
Apos criar os arquivos:

1. Abrir aula_09.html no navegador
2. Navegar por todos os 10 slides usando botoes
3. Testar navegacao por teclado (setas, espaco)
4. Clicar nos dots para pular slides
5. No slide 7, testar o quiz (resposta correta e incorreta)
6. No slide 10, verificar se o confetti aparece
7. Clicar em "Rever Apresentacao" para reiniciar
8. Testar em tamanho mobile (redimensionar janela)
</verification>

<summary_requirements>
Ao finalizar, criar arquivo: `/home/shiv/repos/SEMINARIO/.prompts/002-portal-aula09/SUMMARY.md`

Formato:
```markdown
# Portal Aula 09 Summary

**{Descrever a aula criada em uma linha}**

## Version
v1

## Key Findings
- {Funcionalidade principal 1}
- {Funcionalidade principal 2}
- {Funcionalidade principal 3}

## Files Created
- `AULAS/aula_09.html` - Versao principal da aula interativa
- `portal/public/aulas/aula_09.html` - Copia para deploy no Vercel
- `portal/aulas.html` - Atualizado com link para Aula 09

## Decisions Needed
{Decisoes que o usuario precisa tomar, ou "None"}

## Blockers
{Problemas encontrados, ou "None"}

## Next Step
Testar navegacao completa e quiz em diferentes dispositivos

---
*Confidence: High*
```
</summary_requirements>

<success_criteria>
- [ ] 10 slides criados com conteudo correto
- [ ] Barra de progresso funcionando
- [ ] Navegacao por botoes funcionando
- [ ] Navegacao por teclado funcionando
- [ ] Dots clicaveis funcionando
- [ ] Quiz com feedback imediato
- [ ] Confetti no slide 10
- [ ] Botao reiniciar funcionando
- [ ] Arquivo copiado para portal/public/aulas/
- [ ] aulas.html atualizado com link
- [ ] SUMMARY.md criado
</success_criteria>
