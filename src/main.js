// ==================================================================
// Inclusão Digital UEMG — Portal do Aluno
// Funcionalidades Interativas (mundo Colcha de Retalhos)
// ==================================================================

import './style.css';

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  // ==================================================================
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const mainContent = document.querySelector('.main-content');
  let menuWasOpen = false;

  function setSidebarHidden(hidden) {
    if (!sidebar) return;
    sidebar.setAttribute('aria-hidden', hidden ? 'true' : 'false');
    sidebar.inert = hidden;
  }

  function openMenu() {
    sidebar?.classList.add('open');
    menuToggle?.classList.add('active');
    menuToggle?.setAttribute('aria-expanded', 'true');
    sidebarOverlay?.classList.add('active');
    setSidebarHidden(false);
    if (mainContent) mainContent.inert = true;
    document.body.style.overflow = 'hidden';
    menuWasOpen = true;
    window.requestAnimationFrame(() => sidebar?.querySelector('.sidebar-link')?.focus());
  }

  function closeMenu() {
    const shouldRestoreFocus = menuWasOpen && window.innerWidth <= 768;
    sidebar?.classList.remove('open');
    menuToggle?.classList.remove('active');
    menuToggle?.setAttribute('aria-expanded', 'false');
    sidebarOverlay?.classList.remove('active');
    setSidebarHidden(window.innerWidth <= 768);
    if (mainContent) mainContent.inert = false;
    document.body.style.overflow = '';
    menuWasOpen = false;
    if (shouldRestoreFocus) menuToggle?.focus();
  }

  menuToggle?.addEventListener('click', () => {
    if (sidebar?.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  sidebarOverlay?.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sidebar?.classList.contains('open')) {
      event.preventDefault();
      closeMenu();
    }
  });

  // Close menu when clicking a sidebar link (mobile)
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

  // Close menu on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
      setSidebarHidden(false);
    }
  });

  if (window.innerWidth <= 768) closeMenu();
  else setSidebarHidden(false);


  // 2. Accordion Functionality (se houver)
  // ==================================================================
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isExpanded = header.getAttribute('aria-expanded') === 'true';

      accordionHeaders.forEach(otherHeader => {
        if (otherHeader !== header) {
          otherHeader.setAttribute('aria-expanded', 'false');
          otherHeader.nextElementSibling?.classList.remove('open');
        }
      });

      header.setAttribute('aria-expanded', !isExpanded);
      content?.classList.toggle('open', !isExpanded);
    });
  });


  // 3. Quiz Functionality (cards avulsos .quiz-card)
  // ==================================================================
  // Páginas com sistema de quiz próprio (#quiz-container, ex.: pratique.html)
  // gerenciam seus próprios listeners; o handler genérico pula esses cards.
  const quizCards = document.querySelectorAll('.quiz-card:not(#quiz-container .quiz-card)');

  quizCards.forEach(card => {
    const options = card.querySelectorAll('.quiz-option');
    const feedbackEl = card.querySelector('.quiz-feedback');

    options.forEach(option => {
      option.addEventListener('click', () => {
        const isCorrect = option.dataset.correct === 'true';

        options.forEach(btn => {
          btn.disabled = true;
          if (btn.dataset.correct === 'true') {
            btn.classList.add('correct');
          }
        });

        if (isCorrect) {
          option.classList.add('correct');
          if (feedbackEl) {
            feedbackEl.textContent = 'Parabéns, resposta correta!';
            feedbackEl.classList.add('success', 'show');
          }
        } else {
          option.classList.add('incorrect');
          if (feedbackEl) {
            feedbackEl.textContent = 'Resposta incorreta. A opção certa está marcada em verde.';
            feedbackEl.classList.add('error', 'show');
          }
        }
      });
    });
  });


  // 4. Tooltips de vocabulário (hover + toque)
  // ==================================================================
  document.querySelectorAll('.termo').forEach(term => {
    term.addEventListener('click', (e) => {
      e.preventDefault();
      const wasActive = term.classList.contains('toque-ativo');
      document.querySelectorAll('.termo.toque-ativo').forEach(o => o.classList.remove('toque-ativo'));
      if (!wasActive) term.classList.add('toque-ativo');
    });
    term.addEventListener('mouseleave', () => term.classList.remove('toque-ativo'));
  });


  // 5. PDF Viewer Modal (aulas com PDF)
  // ==================================================================
  const pdfModal = document.getElementById('pdfModal');
  if (pdfModal) {
    const pdfFrame = document.getElementById('pdfFrame');
    const pdfModalTitle = document.getElementById('pdfModalTitle');
    const pdfDownloadBtn = document.getElementById('pdfDownloadBtn');

    window.openPdfViewer = (pdfUrl, title) => {
      pdfModalTitle.textContent = title;
      pdfFrame.src = pdfUrl;
      pdfDownloadBtn.href = pdfUrl;
      pdfModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    window.closePdfViewer = () => {
      pdfModal.classList.remove('active');
      pdfFrame.src = '';
      document.body.style.overflow = '';
    };

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') window.closePdfViewer();
    });

    pdfModal.addEventListener('click', (e) => {
      if (e.target.id === 'pdfModal') window.closePdfViewer();
    });
  }


  // 6. Smooth scroll for anchor links
  // ==================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

});
