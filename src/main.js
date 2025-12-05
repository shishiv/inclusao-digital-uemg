// ==================================================================
// Inclusão Digital UEMG - Portal do Aluno
// Funcionalidades Interativas
// ==================================================================

import './style.css';

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  // ==================================================================
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  function openMenu() {
    sidebar?.classList.add('open');
    menuToggle?.classList.add('active');
    sidebarOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    sidebar?.classList.remove('open');
    menuToggle?.classList.remove('active');
    sidebarOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuToggle?.addEventListener('click', () => {
    if (sidebar?.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  sidebarOverlay?.addEventListener('click', closeMenu);

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
    }
  });


  // 2. Accordion Functionality (Aulas page)
  // ==================================================================
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isExpanded = header.getAttribute('aria-expanded') === 'true';

      // Close all other accordions
      accordionHeaders.forEach(otherHeader => {
        if (otherHeader !== header) {
          otherHeader.setAttribute('aria-expanded', 'false');
          otherHeader.nextElementSibling?.classList.remove('open');
        }
      });

      // Toggle current accordion
      header.setAttribute('aria-expanded', !isExpanded);
      content?.classList.toggle('open', !isExpanded);
    });
  });


  // 3. Quiz Functionality
  // ==================================================================
  const quizCards = document.querySelectorAll('.quiz-card');

  quizCards.forEach(card => {
    const options = card.querySelectorAll('.quiz-option');
    const feedbackEl = card.querySelector('.quiz-feedback');

    options.forEach(option => {
      option.addEventListener('click', () => {
        const isCorrect = option.dataset.correct === 'true';

        // Disable all buttons after choice
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


  // 4. WhatsApp Button Placeholder
  // ==================================================================
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('O link para o grupo do WhatsApp será adicionado em breve!');
    });
  }


  // 5. Smooth scroll for anchor links
  // ==================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

});
