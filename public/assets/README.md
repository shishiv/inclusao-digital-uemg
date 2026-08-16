# Biblioteca de Assets — Inclusão Digital UEMG

Assets reutilizáveis do portal. Todo asset gerado (imagem ou mockup de interface)
entra aqui com nome padronizado, para reuso nas trilhas futuras (60+, IA, Mercado).

## Nomeação (padrão tec-image)

```
<surface>-<sujeito>-<papel>-<proporcao>-v<NN>.<ext>
```

| Campo | Exemplo |
|---|---|
| surface | `landing`, `aula`, `player`, `hero`, `story` |
| sujeito | `school-world`, `whatsapp`, `pix`, `idoso-feliz`, `familia` |
| papel | `bg` (fundo), `mid` (meio), `fg` (frente), `subject`, `device`, `texture` |
| proporção | `16x9`, `9x16`, `1x1` |
| versão | `v01`, `v02` |

Exemplo: `aula-whatsapp-mockup-9x16-v01.png`

## Estrutura

```
public/assets/
├── mockups/       # Simuladores de interface em HTML/CSS (WhatsApp, Gmail, PIX…)
├── ilustracoes/   # Imagens geradas (tec-image / Azure gpt-image-2)
├── icones/        # Ícones SVG de interface, sempre em código
├── texturas/      # Texturas e superfícies do Ateliê de Autonomia
└── README.md      # Este arquivo — índice e curadoria
```

## Índice de assets

### Ateliê de Autonomia (`public/assets/ilustracoes/`)

O mundo visual ativo usa papel recortado artesanal, tinta fosca, grafite suave, madeira clara,
luz quente e adultos brasileiros 60+ como protagonistas capazes. A freeze-list e o ledger
estão em `SPEC.md`, `art/prompts/rebuild_2026/` e `art/provenance/rebuild_2026-assets.json`.

| Asset | Uso | Status |
|---|---|---|
| `home-turma-laboratorio-bg-16x9-v01.png` | Home e aprendizado em comunidade | ✅ ativo |
| `aula-fundamentos-computador` até `aula-celebracao-conquistas` | Série de 9 capas de aula | ✅ ativo |
| `avatar-dona-zilda-subject-1x1-v01.png` e `avatar-seu-jose-subject-1x1-v01.png` | Simuladores de contato | ✅ ativos |
| `textura-oficina-papel-bg-16x9-v01.png` | Fundo de seção | ✅ ativo |
| `roadmap-trilhas-futuras-bg-16x9-v01.png` | Página das trilhas | ✅ ativo |

Os assets anteriores permanecem como patrimônio e evidência. Eles não são apagados ou usados
pelas superfícies redesenhadas.

### Fotos didáticas realistas (`public/assets/fotos/`)

Objetos e situações físicas gerados com Azure `gpt-image-2`. A imagem ensina
aparência e reconhecimento; rótulos, setas, nomes e interfaces ficam em HTML/CSS
para manter exatidão, acessibilidade e adaptação responsiva.

Convenção: `aula_XX/<sujeito>-<proporcao>-vNN.png`. Os prompts reproduzíveis
ficam em `art/prompts/fotos_reais/`. Cada imagem deve passar por read-back visual
antes de entrar numa aula.

| Asset | Uso | Status |
|---|---|---|
| `aula_01/computador-mesa-16x9-v01.png` | Visão geral: monitor, gabinete, teclado e mouse | ✅ aprovado para desktop; mobile usa imagens individuais |
| `aula_01/monitor-1x1-v01.png` | Reconhecimento do monitor | ✅ aprovado |
| `aula_01/gabinete-frente-1x1-v02.png` | Reconhecimento do gabinete, botão e USB | ✅ aprovado como base; rótulos/contraste em HTML |
| `aula_01/mouse-1x1-v01.png` | Mouse, roda e conector USB-A | ✅ aprovado; detalhe preto pede legenda HTML |
| `aula_01/botao-energia-1x1-v01.png` | Onde ligar o gabinete | ✅ aprovado; símbolo recebe rótulo HTML |
| `aula_01/porta-usb-1x1-v01.png` | Porta e plugue USB-A em orientação correta | ✅ aprovado |
| `aula_01/pessoa-idosa-computador-16x9-v01.png` | Autonomia: uso real do computador em casa | ✅ aprovado |
| `aula_01/desligar-computador-16x9-v01.png` | Contexto para desligamento seguro | ⚠️ somente com overlay HTML “Iniciar → Energia → Desligar” |
| `aula_02/roteador-wifi-1x1-v01.png` | Reconhecimento do roteador e LEDs | ✅ aprovado; LEDs recebem explicação HTML |
| `aula_02/celular-maos-9x16-v01.png` | Como segurar e tocar no smartphone | ✅ aprovado |
| `aula_03/videochamada-real-9x16-v01.png` | Pessoa 70+ em videochamada, sem tela exposta | ✅ aprovado |
| `aula_05/documentos-memorias-16x9-v01.png` | Documentos, fotos e pen drive antes do backup | ✅ aprovado; sem PII legível |
| `aula_08/qr-code-impresso-1x1-v01.png` | Contexto visual de leitura de QR Code | ⚠️ ilustrativo; QR funcional continua em código validado |
| `aula_08/documentos-gov-real-16x9-v01.png` | Pessoa 60+ com smartphone e documentos genéricos | ✅ aprovado; sem PII legível |

Rejeitados ficam fora de `public/`, em `art/rejeitados/`. A primeira tomada
gerada foi removida da biblioteca porque trazia três pinos em linha, incompatível
com o padrão brasileiro NBR 14136. Um cabo de energia com plugues incorretos e
uma traseira de PC com cabo inserido numa grade também foram rejeitados.

### Logos reais de ferramentas (`public/assets/logos/`)
Logos oficiais para identificar ferramentas nas aulas (chips `.ferramenta`):
| Logo | Fonte | Formato |
|---|---|---|
| chrome.png, gmail.png, docs.png, sheets.png, slides.png, drive.png, photos.png | Google (gstatic oficial) | PNG 96px |
| whatsapp.svg, youtube.svg, facebook.svg, instagram.svg, playstore.svg | Simple Icons (oficial) | SVG 24px |
| govbr.webp, pix.png | Repo original | WebP/PNG |

Uso: `<span class="ferramenta"><img src="/assets/logos/whatsapp.svg" width="26" height="26"> WhatsApp</span>`

### Mockups (HTML/CSS — simuladores fiéis, clicáveis)
| Asset | Uso | Status |
|---|---|---|
| WhatsApp — conversa + agenda | Aula 03 (piloto) | ✅ em uso |
| WhatsApp — adicionar contato | Aula 03 (piloto) | ✅ em uso |
| Play Store / App Store | Aulas 02, 03, 04, 08 | ⏳ planejado |
| Gmail — criar conta | Aula 01 | ⏳ planejado |
| PIX — pagamento + QR Code | Aula 08 | ⏳ planejado |
| Gov.br — níveis Bronze/Prata/Ouro | Aula 08 | ⏳ planejado |
| Google Fotos — álbum | Aula 05 | ⏳ planejado |

### Ilustrações legadas (tec-image / Azure gpt-image-2)
| Asset | Uso | Status |
|---|---|---|
| `hero-colcha-retalhos-16x9-v01.png` | Home — hero (6 idosos costurando colcha + videochamada com netos) | ✅ gerado (2026-08) |
| `aula-avo-videochamada-subject-9x16-v01.png` | Aula 03 — fase 1 (avó em videochamada com a família) | ✅ gerado (2026-08) |
| `textura-chita-floral-bg-16x9-v01.png` | Home — fundo da seção de recursos (textura seamless) | ✅ gerado (2026-08) |
| `aula04-midias-sociais-bg-16x9-v01.png` | Aula 04 — capa (avós com tablet em rede social) | ✅ gerado (2026-08) |
| `aula05-bau-memorias-bg-16x9-v01.png` | Aula 05 — capa (idoso organizando fotos antigas) | ✅ gerado (2026-08) |
| `aula06-escritorio-bg-16x9-v01.png` | Aula 06 — capa (casal com Docs e Sheets) | ✅ gerado (2026-08) |
| `aula07-slides-bg-16x9-v01.png` | Aula 07 — capa (idosa apresentando slides) | ✅ gerado (2026-08) |
| `aula08-govbr-pix-bg-16x9-v01.png` | Aula 08 — capa (casal com PIX e documento) | ✅ gerado (2026-08) |
| `trilha-ia-comunidade-bg-16x9-v01.png` | Trilha IA — capa (avó com assistente de IA) | ✅ gerado (2026-08) |
| `trilha-mercado-bg-16x9-v01.png` | Trilha Mercado — capa (jovem com portfólio + mentor) | ✅ gerado (2026-08) |
| `textura-chita-azul-bg-16x9-v01.png` | Textura alternativa (fundo azul profundo) | ✅ gerado (2026-08) |
| `aula01-fundamentos-bg-16x9-v01.png` | Aula 01 — capa (idoso com computador, primeiros passos) | ✅ gerado (2026-08) |
| `aula02-navegacao-bg-16x9-v01.png` | Aula 02 — capa (idosa apontando o cadeado de segurança) | ✅ gerado (2026-08) |
| `aula09-formatura-bg-16x9-v01.png` | Aula 09 — capa (formatura com certificados) | ✅ gerado (2026-08) |
| `trilha-palestras-bg-16x9-v01.png` | Trilha Palestras — capa (palestra no auditório) | ✅ gerado (2026-08) |
| `avatar-vo-dona-zilda-1x1-v01.png` | Simuladores — avatar da Dona Zilda (agenda/conversa da aula 03) | ✅ gerado + em uso |
| `avatar-vo-seu-jose-1x1-v01.png` | Simuladores — avatar do Seu José (novo contato) | ✅ gerado + em uso |
| `textura-chita-verde-bg-16x9-v01.png` | Textura alternativa (fundo verde-jardim) | ✅ gerado (2026-08) |
| hero-illustration.png | Home (hero antigo) | ✅ existente |
| group-illustration.jpg | Comunidade | ✅ existente |
| asset1.png | Diversos | ✅ existente |

Prompts de geração em `art/prompts/` (cada asset tem seu .txt correspondente).
Freeze-list do mundo: chita floral, idosos brasileiros sorridentes, luz quente,
ambiente doméstico acolhedor — preservar entre gerações da série.

### Regras de curadoria
1. Todo asset novo entra nomeado pelo padrão acima.
2. Mockups de interface são SEMPRE em código (HTML/CSS), nunca screenshots reais
   (exigem login; e a skill tec-image manda código para exatidão de interface).
3. Ilustrações ambientadas podem usar o Azure gpt-image-2 via
   `~/.agents/skills/tec-image/scripts/generate-image.mjs`.
4. O prompt e a freeze-list de cada imagem gerada ficam em `art/prompts/`.
5. Assets não usados não são deletados — são patrimônio do programa.
