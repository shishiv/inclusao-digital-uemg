# Wireframe ajustável das aulas

Protótipo descartável para validar a composição das aulas antes de transportar decisões para o player de produção.

## Abrir

Com o Vite local ativo:

- http://127.0.0.1:4173/SEMINARIO/wireframes/wireframe_aulas_ajustavel.html

Também pode ser aberto diretamente no navegador como arquivo HTML.

## Como validar

1. Escolha um cenário de conteúdo e uma das cinco fases.
2. Alterne entre Desktop, Tablet e Celular.
3. Ajuste fonte, título, espaço, respiro, proporção das colunas e altura do chrome.
4. Arraste os blocos para alterar a ordem de leitura.
5. Ative **Redimensionar** e puxe o canto inferior direito de qualquer bloco.
6. Ative **Anotar**, clique dentro da etapa e escreva no post-it; o post-it também pode ser arrastado.
7. Defina o veredito e use **Copiar** para colar o resumo no chat, ou **Exportar** para obter o estado completo em JSON.

O botão **Salvar** usa apenas `localStorage` do navegador. O wireframe não altera os arquivos das aulas nem envia dados para servidor.

## Decisão validada — navegação do player

Em agosto de 2026, um protótipo comparativo descartável validou a **variante A — botões nos cantos**.

- círculos de 58px nos cantos inferiores;
- Anterior azul e Próximo vermelho;
- rótulos em hover/foco e sempre visíveis no mobile;
- `aria-label` explícito;
- zona segura inferior no mobile;
- sem barra larga no rodapé;
- contagem mantida apenas no progresso superior;
- última etapa troca a seta por ✓ e anuncia “Concluir esta aula”.

A direção foi transportada para `public/assets/player.css` e `public/assets/player-base.js`. O comparativo descartável foi removido após a validação.
