# 🌐 Inclusão Digital UEMG

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![Status](https://img.shields.io/badge/Status-Em%20Produção-green)](https://inclusao-digital-uemg.vercel.app)

> Portal educacional acessível para adultos 60+ aprenderem tecnologia. Projeto de extensão PAEx UEMG Frutal.

🔗 **[Ver projeto online](https://inclusao-digital-uemg.vercel.app)**

![Screenshot](./docs/screenshot.png)

## 📖 Sobre o Projeto

O **Inclusão Digital UEMG** é um portal educacional desenvolvido como parte do programa PAEx (Programa de Apoio à Extensão) da UEMG - Universidade do Estado de Minas Gerais, campus Frutal. O projeto tem como missão democratizar o acesso à tecnologia para adultos com 60 anos ou mais, oferecendo conteúdo didático, acessível e adaptado às necessidades deste público.

Criado com foco em usabilidade e acessibilidade, o portal oferece tutoriais em texto e vídeo sobre temas essenciais: uso de smartphones, navegação na internet, comunicação por WhatsApp, segurança digital e muito mais.

**Público-alvo:** Adultos 60+ com pouca ou nenhuma experiência com tecnologia  
**Alcance:** Comunidade de Frutal/MG e região  
**Status:** ✅ Em produção desde 2024

## ✨ Features

- **Design acessível**: Fontes grandes, contraste elevado, botões com espaçamento generoso
- **Navegação simplificada**: Menu intuitivo com categorias claras
- **Tutoriais passo a passo**: Instruções detalhadas com imagens ilustrativas
- **Suporte a vídeos**: Conteúdo audiovisual para diferentes estilos de aprendizado
- **Responsivo**: Funciona em desktops, tablets e smartphones
- **Performance otimizada**: Carregamento rápido mesmo em conexões lentas
- **Sem distrações**: Interface limpa, sem pop-ups ou propagandas

## 🎯 Diferenciais de Acessibilidade

Este projeto foi desenvolvido seguindo as diretrizes **WCAG 2.1** (Web Content Accessibility Guidelines) com foco especial em:

- **Contraste de cores**: Razão mínima de 4.5:1 entre texto e fundo
- **Tamanho de fonte**: Base de 18px, facilmente ajustável
- **Espaçamento**: Áreas clicáveis com mínimo de 44x44px (recomendação mobile)
- **Linguagem clara**: Evita jargões técnicos, prioriza termos do dia a dia
- **Feedback visual**: Estados de hover/foco bem definidos para navegação por teclado
- **Sem autoplay**: Vídeos e animações só iniciam com ação do usuário

## 🛠️ Stack Técnica

**Frontend:**
- **HTML5** — Estrutura semântica e acessível
- **CSS3** — Estilização com Flexbox/Grid, sem frameworks pesados
- **JavaScript vanilla** — Interatividade sem dependências externas

**Infraestrutura:**
- **Vercel** — Hospedagem com CDN global
- **Git** — Controle de versão

**Motivo da escolha:** Stack simples e leve para garantir performance máxima e facilitar manutenção futura por outros bolsistas do projeto.

## 📚 Conteúdos Disponíveis

- **Primeiros Passos com Smartphone**
- **Como Navegar na Internet com Segurança**
- **WhatsApp para Iniciantes**
- **E-mail: Criar Conta e Enviar Mensagens**
- **YouTube: Assistir e Buscar Vídeos**
- **Golpes Digitais: Como se Proteger**
- **Configurações de Acessibilidade no Android/iOS**

## 💻 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/shishiv/inclusao-digital-uemg.git
cd inclusao-digital-uemg

# Abra o projeto
# Opção 1: Abra index.html diretamente no navegador
# Opção 2: Use um servidor local
python -m http.server 8000
# ou
npx serve .
```

Acesse `http://localhost:8000` no navegador.

## 📁 Estrutura do Projeto

```
inclusao-digital-uemg/
├── index.html              # Página principal
├── css/
│   ├── style.css          # Estilos globais
│   └── acessibilidade.css # Estilos específicos de acessibilidade
├── js/
│   ├── main.js            # Funções principais
│   └── menu.js            # Navegação mobile
├── tutoriais/             # Páginas de conteúdo
│   ├── smartphone.html
│   ├── internet.html
│   └── whatsapp.html
├── assets/
│   ├── images/            # Ilustrações e ícones
│   └── videos/            # Vídeos tutoriais
└── docs/                  # Documentação e screenshots
```

## 🎓 Impacto Social

**Números do projeto (2024):**
- 150+ adultos impactados em oficinas presenciais
- 800+ acessos mensais ao portal
- 4,8/5 de satisfação em pesquisa com usuários
- Parceria com Centro de Convivência do Idoso de Frutal

## 🤝 Contribuindo

Contribuições são bem-vindas! Este é um projeto educacional aberto a melhorias. Se você tem sugestões de novos tutoriais, correções de acessibilidade ou melhorias de UX, fique à vontade para abrir uma issue ou pull request.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- **UEMG Frutal** — Pelo apoio institucional via PAEx
- **Professor Orientador** — Coordenação do projeto de extensão
- **Participantes das oficinas** — Feedback essencial para evolução do portal

---

**Desenvolvido por [Myke Matos](https://github.com/shishiv)** • Bolsista PAEx UEMG • Fundador [@TriânguloTEC](https://triangulotec.com.br)
