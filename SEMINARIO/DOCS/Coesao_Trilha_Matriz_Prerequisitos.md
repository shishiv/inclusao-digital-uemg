# 🧩 COESÃO DA TRILHA — MATRIZ DE PRÉ-REQUISITOS
**Diagnóstico dos PDFs atuais e blueprint para as aulas interativas**
**Data:** Agosto 2026 · **Origem:** análise do conteúdo das 8 aulas (PDFs em `public/aulas/`)

---

## 1. O PROBLEMA (confirmado pelo orientador externo)

As aulas atuais **usam conceitos sem ensiná-los**. O caso citado:

> Aula 03 (WhatsApp): "Selecione um contato da lista" — mas em nenhum momento a trilha
> explica o que é um contato, onde os contatos ficam, como adicionar um contato,
> o que é agenda telefônica, ou de onde vêm os contatos.

Este não é um caso isolado. É um **padrão sistêmico** em 4 categorias de pré-requisitos:

| Categoria | Conceitos usados sem ensinar | Exemplo nas aulas |
|---|---|---|
| **Celular & apps** | app, loja de aplicativos, instalar, ícone, tela inicial | Aula 03: "Abra a loja de aplicativos" (nunca define o que é) |
| **Conta & identidade** | conta, login, senha, perfil, foto de perfil | Aula 04: "Criar sua conta" (conta nunca foi definida) |
| **Comunicação** | contato, agenda, conversa, mensagem, grupo | Aula 03: "Selecione um contato" (o gap citado) |
| **Interface & navegação** | aba, menu, barra de busca, botão, link, upload, download, nuvem, QR Code, notificação | Aula 05: "Fazer upload" / Aula 08: "Leia o QR Code" |

---

## 2. MATRIZ AULA A AULA (o que usa × o que ensina)

### AULA 01 — Sua Jornada Começa Aqui (computador + Gmail)
| Conceito usado | Ensinado? | Observação |
|---|---|---|
| Computador, monitor, teclado, mouse | ✅ | Analogia casa digital — ótimo |
| Ligar/desligar com segurança | ✅ | Bom |
| Navegador (Chrome, Firefox, Edge) | ✅ | Analogia "ônibus da cidade" — ótimo |
| Internet, site, endereço | ⚠️ Parcial | "Cidade gigante" — boa, mas "site" nunca é fechado |
| E-mail, conta | ⚠️ Parcial | Cria o Gmail, mas **não define o que é uma conta** |
| Senha | ⚠️ Parcial | Usada na criação, nunca explicada como conceito |
| **"Criar Conta"** | ❌ | Fluxo seguido, conceito não definido |
| "Clicar em Escrever" | ✅ | Ação prática com contexto |

**Gaps que quebram o resto da trilha:** conta, senha, e-mail como conceito (não só como ação).

### AULA 02 — Navegando com Segurança (internet + ferramentas)
| Conceito usado | Ensinado? | Observação |
|---|---|---|
| URL, endereço de site | ✅ | Analogia casa — bom |
| Cadeado https | ✅ | Bom |
| Links patrocinados vs. resultados | ✅ | Muito bom |
| Fake news, checar fonte | ✅ | Bom |
| Golpes, regras de ouro | ✅ | Excelente |
| Compras online | ✅ | Analogia shopping — bom |
| Google Maps | ✅ | Bom |
| **WhatsApp Web** | ❌ | **Usado aqui, mas WhatsApp só é ensinado na aula 03!** |
| **Banco digital / telemedicina** | ❌ | Serviços avançados antes da base de app/celular |
| **"Baixar", "download"** | ❌ | Termo usado, nunca definido |
| **Antivírus** | ❌ | Mencionado, nunca explicado |

**Problema estrutural:** a aula 02 é um "grande final" de segurança que visita WhatsApp Web,
bancos e telemedicina — conteúdo que pressupõe as aulas 03-08. Está **fora de ordem**.

### AULA 03 — WhatsApp: Conectando Famílias
| Conceito usado | Ensinado? | Observação |
|---|---|---|
| WhatsApp, mensagens, fotos, áudios | ✅ | Analogia "portão de casa" — ótima |
| Instalação (Play Store / App Store) | ⚠️ | Passo a passo, mas **loja de aplicativos nunca é explicada** |
| **Contato** | ❌ | **O gap citado pelo orientador** — "selecione um contato" sem definir |
| **Agenda telefônica** | ❌ | Nunca mencionada como origem dos contatos |
| **Como adicionar contato** | ❌ | Nunca ensinado |
| Grupos | ⚠️ | "Reunião de família" — boa analogia, mas "criar grupo" usa menu ⋮ sem explicar menu |
| Chamadas/vídeo | ✅ | Bom |
| Segurança (código, golpes) | ✅ | Bom |
| WhatsApp Web | ✅ | **Aqui sim!** Mas já tinha aparecido na aula 02 |

**Gap mais grave da trilha inteira:** contato/agenda. Sem isso, "selecionar contato",
"adicionar membros ao grupo" e "ligar para a pessoa" são instruções cegas.

### AULA 04 — Mídias Sociais (Facebook, Instagram, YouTube)
| Conceito usado | Ensinado? | Observação |
|---|---|---|
| Facebook | ✅ | Analogia álbum de família — boa |
| Instagram | ✅ | Analogia vitrine — boa |
| YouTube | ✅ | Analogia TV personalizada — boa |
| **"Criar sua conta"** | ❌ | Conceito de conta segue sem definição (arrastado da aula 01) |
| **"Baixar o aplicativo"** | ⚠️ | "Como instalar um programa novo" — mas instalar app nunca foi ensinado de verdade |
| **Seguir, postar, curtir, stories** | ⚠️ | Usados com contexto, sem definição fechada |
| Privacidade, contas falsas | ✅ | Bom |
| **Perfil / foto de perfil** | ❌ | Usado sem definir |

**Gap:** a "conta" continua sendo um ritual sem conceito. Perfil nunca é definido.

### AULA 05 — Baú Digital de Memórias (Drive + Google Fotos)
| Conceito usado | Ensinado? | Observação |
|---|---|---|
| Google Drive | ✅ | Analogia armário — ótima |
| Pastas ("gavetas") | ✅ | Excelente analogia |
| Google Fotos | ✅ | Analogia álbum infinito — ótima |
| **Upload ("fazer upload de arquivo")** | ❌ | Usado, nunca definido |
| **Link ("copiar link")** | ❌ | Usado, nunca definido (aula 02 falou de links, mas como conceito de compartilhamento não) |
| **Login ("fazer login com o Gmail")** | ❌ | Usado, nunca definido |
| **Backup ("deixe o backup ligado")** | ❌ | Termo técnico sem tradução |
| **Menu (⋮)** | ❌ | Ação repetida, conceito de menu nunca fechado |
| Compartilhar | ⚠️ | Ação ensinada, "permissão de edição" nunca explicada |

**Gap:** vocabulário técnico (upload, login, backup) — exatamente o que a especificação
andragógica manda traduzir ("baixar" não é "download").

### AULA 06 — Escritório Digital (Docs + Sheets)
| Conceito usado | Ensinado? | Observação |
|---|---|---|
| Google Docs | ✅ | Analogia máquina de escrever — boa |
| Google Sheets | ✅ | Analogia caderno quadriculado — boa |
| Quadradinhos do Google (launcher) | ✅ | **Finalmente explicado! (deveria estar na aula 01)** |
| **Nuvem** | ⚠️ | "Fica salvo na nuvem" — sem explicar o que é nuvem |
| **Célula, coluna, linha** | ✅ | Explicado — bom |
| **Fórmula =SOMA()** | ⚠️ | Copiar fórmula, sem entender o que é fórmula |
| Compartilhar (ver/editar) | ✅ | Permissões explicadas — bom |

**Gap leve:** "nuvem" merece 30 segundos de analogia (guarda-chuva: "um lugar que não é
seu computador, acessível de qualquer aparelho").

### AULA 07 — Google Slides
| Conceito usado | Ensinado? | Observação |
|---|---|---|
| Google Slides | ✅ | Analogia álbum de figurinhas — boa |
| Tema, título, texto | ✅ | Bom |
| Inserir imagem (de Drive/Fotos) | ✅ | Conecta aulas anteriores — ótimo |
| **Aba** | ❌ | "Uma nova aba vai abrir" — nunca definida |
| Apresentar / tela cheia | ✅ | Bom |
| **Menu "Inserir"** | ⚠️ | Barra de menus nunca explicada como conceito |

**Gap leve:** "aba" é o último termo de interface sem definição.

### AULA 08 — Gov.br e PIX
| Conceito usado | Ensinado? | Observação |
|---|---|---|
| Gov.br, níveis Bronze/Prata/Ouro | ✅ | Muito bom |
| **"Baixe o aplicativo na loja do celular"** | ❌ | Loja de apps segue sem explicação (arrastado da aula 03) |
| **App do banco** | ⚠️ | Pressupõe que aluno tem e sabe usar app de banco |
| **QR Code** | ❌ | "Aponte a câmera para o quadrado" — sem definir o que é |
| **Biometria facial** | ❌ | "Reconhecimento Facial" usado sem explicar |
| PIX, chaves (CPF, celular, e-mail) | ✅ | Analogia teletransporte — ótima |
| Golpes (parente falso, link falso) | ✅ | Excelente — casos reais |
| **"Confira o NOME"** | ✅ | Ótima prática de segurança |

**Gap:** QR Code e biometria são os últimos termos sem definição.

---

## 3. GLOSSÁRIO-MESTRE DE PRÉ-REQUISITOS (o vocabulário da trilha)

Cada termo abaixo precisa ser **introduzido uma vez, com analogia, no momento certo**
— e depois **referenciado com tooltip** em todas as aulas seguintes.

### Nível 1 — Base (introduzir na Aula 01)
| Termo | Analogia andragógica | Onde usar depois |
|---|---|---|
| **Conta** | "Cadastro que diz ao serviço quem você é — como sua assinatura" | Todas as aulas |
| **Senha** | "Chave da sua casa digital — só você tem" | Todas as aulas |
| **E-mail** | "Correio digital: carta que chega em segundos" | Aulas 02-08 |
| **Site / endereço** | "Loja na avenida da internet, com endereço próprio" | Aulas 02-08 |
| **Navegador** | "Ônibus que leva você aos lugares da internet" | Aulas 02-08 |

### Nível 2 — Celular (introduzir na Aula 02, antes de WhatsApp)
| Termo | Analogia andragógica | Onde usar depois |
|---|---|---|
| **Aplicativo (app)** | "Programa feito para o celular — como uma ferramenta da caixa" | Aulas 03-08 |
| **Loja de aplicativos** | "Shopping de apps: Play Store (loja do robôzinho) e App Store (loja da maçã)" | Aulas 03, 04, 05, 08 |
| **Instalar** | "Colocar a ferramenta nova na sua caixa — se faz uma vez, fica pra sempre" | Aulas 03-08 |
| **Ícone** | "Desenho que representa o app na tela — como o rótulo do pote" | Aulas 03-08 |
| **Tela inicial** | "Mesa onde ficam os atalhos dos seus apps" | Aulas 03-08 |
| **Wi-Fi** | "Internet da sua casa, sem fio — como o telefone sem fio antigo" | Aulas 03-08 |
| **Dados móveis** | "Internet do chip, para quando você está na rua" | Aulas 03-08 |

### Nível 3 — Comunicação (introduzir na Aula 03, antes de "enviar mensagem")
| Termo | Analogia andragógica | Onde usar depois |
|---|---|---|
| **Contato** | "Pessoa salva na sua agenda do celular — como a agenda de telefones de casa" | Aulas 03-08 |
| **Agenda** | "Caderninho de endereços e telefones que mora dentro do celular" | Aulas 03-08 |
| **Adicionar contato** | "Escrever o nome e o número de alguém na sua agenda" | Aulas 03-08 |
| **Conversa** | "Bate-papo entre você e uma pessoa (ou grupo)" | Aulas 03-08 |
| **Grupo** | "Reunião de família: todos na mesma conversa" | Aulas 03-08 |
| **Mensagem** | "Recado enviado — texto, foto, áudio ou vídeo" | Aulas 03-08 |

### Nível 4 — Interface (completar na Aula 04; tooltip dali em diante)
| Termo | Analogia andragógica | Onde usar depois |
|---|---|---|
| **Menu (⋮ / ⋯)** | "Gaveta de opções: toque e veja o que tem dentro" | Aulas 04-08 |
| **Perfil** | "Seu cartão de visita digital: foto, nome, informações" | Aulas 04-08 |
| **Postar** | "Colocar algo para todos verem — como pendurar foto na parede da sala" | Aulas 04-08 |
| **Seguir** | "Assinar o mural de alguém para ver as novidades" | Aulas 04-08 |
| **Curtir** | "Dar um abraço à distância" | Aulas 04-08 |

### Nível 5 — Serviços (introduzir na Aula 05; tooltip dali em diante)
| Termo | Analogia andragógica | Onde usar depois |
|---|---|---|
| **Login / Entrar** | "Identificar-se: dizer quem você é e provar com a senha" | Aulas 05-08 |
| **Upload / Enviar arquivo** | "Mandar um documento da sua casa para o armário na nuvem" | Aulas 05-08 |
| **Download / Baixar** | "Trazer uma cópia do armário para o seu aparelho" | Aulas 05-08 |
| **Nuvem** | "Armário que não é seu, mas só você acessa — de qualquer lugar" | Aulas 05-08 |
| **Backup** | "Cópia de segurança: se perder o original, você tem a reserva" | Aulas 05-08 |
| **Link** | "Atalho que leva direto a um lugar — como o caminho anotado no papel" | Aulas 05-08 |

### Nível 6 — Avançado (introduzir na Aula 08; tooltip dali em diante)
| Termo | Analogia andragógica |
|---|---|
| **QR Code** | "Código de barras quadrado que guarda um endereço — a câmera lê por você" |
| **Biometria facial** | "Reconhecimento do seu rosto — a prova de que é você" |
| **Token / código de verificação** | "Senha temporária enviada por SMS — como o carimbo de autenticidade" |

---

## 4. CORREÇÕES DE ORDEM (o que mover)

1. **Aula 02 → tirar WhatsApp Web, bancos digitais e telemedicina.**
   Substituir por: introdução ao **celular** (app, loja, instalar, ícone, Wi-Fi, dados) —
   o nível 2 do glossário. Isso prepara a aula 03 sem pular etapas.
2. **Aula 03 → abrir com "O que é um contato?"** antes de qualquer instrução de mensagem.
   Nova subseção obrigatória: contato → agenda → adicionar contato → escolher contato.
3. **Aula 01 → fechar o conceito de conta/senha** (não só executar o fluxo de criação).
4. **Aula 04 → definir perfil e conta** antes de "criar sua conta no Facebook".
5. **Aula 05 → traduzir upload/login/backup** (nunca usar o termo em inglês sem a analogia).
6. **Aula 08 → explicar QR Code e biometria** em uma linha antes de usar.

---

## 5. COMO ISSO VIRA O AMBIENTE INTERATIVO

O glossário-mestre não é só um documento: é **um sistema no portal**:

1. **Primeira aparição = lição.** Quando o termo aparece pela primeira vez na trilha,
   ele vem com analogia + exemplo interativo (ex.: tocar num contato falso e ver
   "este é o contato — o nome que você salva na agenda").
2. **Aparições seguintes = tooltip.** Passar o mouse (ou tocar) no termo abre um
   balãozinho com a definição curta + link "relembrar a aula X". Nada de re-explicar.
3. **Mapa de progresso da trilha.** O aluno vê quais termos já domina
   (conta ✅, senha ✅, contato ✅…) — feedback de autoeficácia constante.
4. **PDFs viram roteiro do monitor.** Cada aula interativa tem um "guia do monitor"
   (PDF original + anotações de onde estão os momentos de virada e os termos novos).

---

## 6. VERIFICAÇÃO DA COESÃO (critério de aceite)

Uma aula nova só entra na trilha se passar nesse check:

- [ ] Nenhum termo técnico usado sem ter sido introduzido antes (ou sem tooltip)
- [ ] Toda instrução de interface tem alvo visível ("botão azul no canto superior direito")
- [ ] Cada conceito novo tem analogia do cotidiano
- [ ] A primeira interação da aula é trivial e garantida (autoeficácia)
- [ ] Conecta com a aula anterior ("lembra do seu Gmail? vamos usar hoje")
- [ ] A aula termina com "momento eu consigo" + missão da semana
