// ==================================================================
// Inclusão Digital UEMG — Player de Aula (lógica genérica)
// Reutilizado por todas as aulas interativas (03, 04, 05, ...)
//
// Responsabilidades:
//  - Navegação entre etapas (.etapa[data-etapa]) com Anterior/Próximo
//  - Barra de progresso (.progresso-preenchido)
//  - Tooltips de vocabulário (.termo → .tooltip, hover + toque)
//  - Quizzes de decisão (.quiz-opcoes[data-quiz] → [data-feedback])
//
// O conteúdo específico de cada aula (simuladores, formulários) fica
// no script inline da própria aula, chamando PlayerAPI quando precisar.
// ==================================================================
(function () {
  "use strict";

  var PlayerAPI = {};

  // ===== Estado =====
  var etapas = Array.prototype.slice.call(document.querySelectorAll('section.etapa[data-etapa]'));
  var totalEtapas = etapas.length;
  var etapaAtual = 1;

  var barra = document.getElementById('progresso-barra');
  var texto = document.getElementById('progresso-texto');
  var btnAnterior = document.getElementById('btn-anterior');
  var btnProximo = document.getElementById('btn-proximo');
  var player = document.querySelector('.player');
  var navegacao = document.querySelector('.player-nav');
  var contadorNavegacao = document.createElement('span');
  contadorNavegacao.className = 'player-nav-contador';
  contadorNavegacao.setAttribute('aria-live', 'polite');
  if (navegacao) navegacao.insertBefore(contadorNavegacao, btnProximo || null);
  if (btnAnterior) {
    btnAnterior.setAttribute('aria-label', 'Voltar para a etapa anterior');
    btnAnterior.dataset.label = 'Anterior';
    btnAnterior.title = 'Etapa anterior';
  }
  if (btnProximo) {
    btnProximo.setAttribute('aria-label', 'Avançar para a próxima etapa');
    btnProximo.dataset.label = 'Próximo';
    btnProximo.title = 'Próxima etapa';
  }
  var dicaRolagem = document.createElement('button');
  dicaRolagem.type = 'button';
  dicaRolagem.className = 'player-scroll-hint';
  dicaRolagem.textContent = 'Role para continuar ↓';
  dicaRolagem.hidden = true;
  if (player) player.appendChild(dicaRolagem);

  function comportamentoRolagem() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  }

  function atualizarDicaRolagem() {
    var etapa = etapas[etapaAtual - 1];
    if (!etapa) return;
    var aindaTemConteudo = etapa.scrollHeight > etapa.clientHeight + 4 &&
      etapa.scrollTop + etapa.clientHeight < etapa.scrollHeight - 4;
    dicaRolagem.hidden = !aindaTemConteudo;
  }

  dicaRolagem.addEventListener('click', function () {
    var etapa = etapas[etapaAtual - 1];
    if (etapa) etapa.scrollBy({ top: Math.max(180, etapa.clientHeight * 0.7), behavior: comportamentoRolagem() });
  });
  etapas.forEach(function (etapa) { etapa.addEventListener('scroll', atualizarDicaRolagem); });

  // Ajuda sempre disponível: um adulto não deve precisar abandonar a etapa
  // para lembrar como pedir apoio ao monitor.
  var ajuda = document.createElement('button');
  ajuda.type = 'button';
  ajuda.className = 'player-ajuda';
  ajuda.textContent = '🙋 Preciso de ajuda';
  ajuda.setAttribute('aria-expanded', 'false');
  ajuda.addEventListener('click', function () {
    var aberta = ajuda.classList.toggle('aberta');
    ajuda.setAttribute('aria-expanded', aberta ? 'true' : 'false');
    ajuda.textContent = aberta
      ? 'Peça ao monitor ou a um colega para fazer este passo com você. Sem pressa. ✕'
      : '🙋 Preciso de ajuda';
  });
  var topo = document.querySelector('.player-topo');
  if (topo) topo.appendChild(ajuda);
  else document.body.appendChild(ajuda);

  // ===== Navegação =====
  function mostrarEtapa(n, semScroll) {
    etapaAtual = Math.max(1, Math.min(totalEtapas, n));
    etapas.forEach(function (e, i) {
      var ativa = i + 1 === etapaAtual;
      e.classList.toggle('ativa', ativa);
      e.hidden = !ativa;
      e.setAttribute('aria-hidden', ativa ? 'false' : 'true');
    });
    if (barra) barra.style.width = ((etapaAtual / totalEtapas) * 100) + '%';
    if (texto) texto.textContent = 'Etapa ' + etapaAtual + ' de ' + totalEtapas;
    contadorNavegacao.textContent = etapaAtual + ' / ' + totalEtapas;
    if (btnAnterior) btnAnterior.disabled = etapaAtual === 1;
    if (btnProximo) {
      btnProximo.textContent = etapaAtual === totalEtapas ? 'Concluir 🎉' : 'Próximo →';
      btnProximo.dataset.final = etapaAtual === totalEtapas ? 'true' : 'false';
      btnProximo.dataset.label = etapaAtual === totalEtapas ? 'Concluir' : 'Próximo';
      btnProximo.setAttribute('aria-label', etapaAtual === totalEtapas
        ? 'Concluir esta aula'
        : 'Avançar para a próxima etapa');
    }
    if (!semScroll) {
      var etapaAtiva = etapas[etapaAtual - 1];
      var tituloAtivo = etapaAtiva && etapaAtiva.querySelector('h2');
      if (tituloAtivo) {
        tituloAtivo.setAttribute('tabindex', '-1');
        tituloAtivo.focus({ preventScroll: true });
      }
      if (player) player.scrollIntoView({ behavior: comportamentoRolagem(), block: 'start' });
    }
    window.requestAnimationFrame(atualizarDicaRolagem);
  }

  if (btnAnterior) btnAnterior.addEventListener('click', function () { mostrarEtapa(etapaAtual - 1); });
  if (btnProximo) btnProximo.addEventListener('click', function () {
    if (etapaAtual === totalEtapas) {
      window.location.href = '/aulas.html';
      return;
    }
    mostrarEtapa(etapaAtual + 1);
  });

  // Inicializa o estado visual sem rolar a página
  mostrarEtapa(1, true);

  // Teclado
  document.addEventListener('keydown', function (e) {
    var alvo = e.target;
    var interagindo = alvo && (
      alvo.tagName === 'INPUT' || alvo.tagName === 'TEXTAREA' ||
      alvo.tagName === 'SELECT' || alvo.tagName === 'BUTTON' || alvo.tagName === 'A' ||
      alvo.isContentEditable || alvo.closest('[role="button"], [role="tab"], [role="menuitem"]')
    );
    if (interagindo) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); mostrarEtapa(etapaAtual + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); mostrarEtapa(etapaAtual - 1); }
  });

  // ===== Tooltips (hover + toque) =====
  function fecharTermos(exceto) {
    document.querySelectorAll('.termo.toque-ativo').forEach(function (o) {
      if (o !== exceto) {
        o.classList.remove('toque-ativo');
        o.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('.termo').forEach(function (t, indice) {
    var tooltip = t.querySelector('.tooltip');
    if (tooltip) {
      if (!tooltip.id) tooltip.id = 'tooltip-termo-' + (indice + 1);
      t.setAttribute('aria-describedby', tooltip.id);
    }
    t.setAttribute('role', 'button');
    t.setAttribute('aria-expanded', 'false');

    function alternarTermo() {
      var ativo = t.classList.contains('toque-ativo');
      fecharTermos(t);
      t.classList.remove('tooltip-dismissed');
      t.classList.toggle('toque-ativo', !ativo);
      t.setAttribute('aria-expanded', ativo ? 'false' : 'true');
    }

    t.addEventListener('click', function (e) {
      e.preventDefault();
      alternarTermo();
    });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        alternarTermo();
      } else if (e.key === 'Escape') {
        t.classList.remove('toque-ativo');
        t.classList.add('tooltip-dismissed');
        t.setAttribute('aria-expanded', 'false');
      }
    });
    t.addEventListener('mouseleave', function () {
      t.classList.remove('toque-ativo');
      t.setAttribute('aria-expanded', 'false');
    });
  });

  // ===== Quizzes de decisão (genéricos) =====
  document.querySelectorAll('.quiz-opcoes').forEach(function (opcoes) {
    var feedback = document.querySelector('[data-feedback="' + opcoes.dataset.quiz + '"]');
    if (feedback) {
      feedback.setAttribute('role', 'status');
      feedback.setAttribute('aria-live', 'polite');
      feedback.setAttribute('aria-atomic', 'true');
    }
    opcoes.querySelectorAll('.quiz-option').forEach(function (opcao) {
      opcao.addEventListener('click', function () {
        var correto = opcao.dataset.correct === 'true';
        var correta = opcoes.querySelector('.quiz-option[data-correct="true"]');
        var textoCorreto = correta ? correta.innerText.trim().replace(/^\s*[A-Z]\s+/, '') : 'a alternativa correta';
        opcoes.querySelectorAll('.quiz-option').forEach(function (o) {
          o.disabled = true;
          var eCorreta = o.dataset.correct === 'true';
          o.setAttribute('aria-pressed', eCorreta ? 'true' : 'false');
          if (eCorreta) {
            o.classList.add('correct');
            o.setAttribute('aria-label', 'Resposta correta: ' + o.innerText.trim());
          } else if (o === opcao) {
            o.setAttribute('aria-label', 'Resposta escolhida, incorreta: ' + o.innerText.trim());
          }
        });
        if (!correto) opcao.classList.add('incorrect');
        if (feedback) {
          var msgCorreta = opcao.dataset.feedbackCorrect || '🎉 Muito bem! Essa é a atitude certa.';
          var msgErrada = opcao.dataset.feedbackWrong || '💡 Quase!';
          feedback.classList.add('show', correto ? 'success' : 'error');
          feedback.textContent = correto ? msgCorreta : msgErrada + ' Resposta correta: ' + textoCorreto + '.';
        }
      });
    });
  });

  // ===== API pública para scripts específicos da aula =====
  PlayerAPI.mostrarEtapa = mostrarEtapa;
  PlayerAPI.etapaAtual = function () { return etapaAtual; };
  PlayerAPI.total = totalEtapas;

  window.PlayerAPI = PlayerAPI;
})();
