# 🎓 Portal do Aluno - Programa de Inclusão Digital 60+ (UEMG Frutal)

Este é o repositório do **Portal do Aluno**, uma página web criada como material de apoio e legado para os participantes do projeto de extensão "Inclusão Digital - Acessibilidade às Tecnologias da Informação no Município de Frutal/MG", da Universidade do Estado de Minas Gerais (UEMG), unidade Frutal.

O portal serve como uma central de materiais, exercícios e links úteis, garantindo que os alunos, em sua maioria idosos, possam continuar sua jornada de aprendizado digital mesmo após a conclusão do curso.

O projeto de extensão, ativo desde 2009, tem um impacto social significativo na promoção da autonomia e confiança digital para a comunidade 60+.

---

## ✨ Sobre o Projeto

O portal foi desenhado com foco total em **acessibilidade e facilidade de uso**:
- **Design Limpo e Intuitivo:** Interface com fontes grandes, alto contraste e botões claros.
- **Conteúdo Centralizado:** Todas as aulas em PDF, exercícios interativos e links importantes em um só lugar.
- **Responsivo:** Funciona perfeitamente em computadores, tablets e, principalmente, nos celulares dos alunos.

## 🚀 Tech Stack & Arquitetura

Este projeto foi construído com uma abordagem moderna e minimalista, focando nos fundamentos da web e em um pipeline de desenvolvimento profissional.

- **Frontend:** HTML5, CSS3 e **JavaScript puro (Vanilla JS)**.
- **Build Tool:** **Vite** para um ambiente de desenvolvimento rápido e otimização de build.
- **Hospedagem:** **Vercel**, com deploy contínuo a partir do GitHub.
- **CI/CD:** **GitHub Actions** para automatizar o build e o deploy a cada push na branch `main`.

---

## 🧑‍💻 Autores e Orientação

Este projeto é fruto do trabalho de extensão universitária fomentado pelo **PAEx (Programa Institucional de Apoio à Extensão)**.

- **Autor/Discente:** Myke Matos dos Santos (Sistemas de Informação - UEMG Frutal)
- **Orientador/Docente:** Prof. Cícero Marcelo de Oliveira (Sistemas de Informação - UEMG Frutal)

---

## ⚙️ Como Executar Localmente

Para rodar este projeto em sua máquina local, siga os passos abaixo.

**Pré-requisitos:**
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/inclusao-digital-uemg.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd portal
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  **Abra seu navegador** e acesse `http://localhost:5173` (ou o endereço que aparecer no seu terminal).

---

## 🔄 Pipeline de CI/CD

O processo de deploy é 100% automatizado com GitHub Actions e Vercel.

1.  **Push na `main`:** Qualquer alteração enviada para a branch `main` aciona o workflow.
2.  **Build:** A Action do GitHub instala as dependências e executa o comando `vite build`.
3.  **Deploy:** O artefato gerado (a pasta `dist`) é enviado para a Vercel, que o publica em produção.

O arquivo de configuração pode ser encontrado em `.github/workflows/deploy.yml`.

---
_Este projeto é um exemplo prático de como a tecnologia pode ser usada para gerar impacto social, combinando desenvolvimento de software com responsabilidade comunitária._