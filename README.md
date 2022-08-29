## Introdução

Esse projeto se destina à Paytour como teste prático, bem como um repositório de facil acesso para aprender sobre o básico de Vue.JS, Nuxt e Axios.

O projeto foi criado utilizando Visual Studio como IDE com Vue.JS e Nuxt em seu núcleo, Vuetify para elementos visuais e Axios para requisições à API.
Tudo citado a cima é providenciado pelo pacote Vue CLI.

## Requerimentos

- [VSCode IDE](https://code.visualstudio.com/Download)
- [GIT](https://git-scm.com/downloads)
- [Node.JS + NPM](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable) `Opcional`
- [Vue CLI](https://cli.vuejs.org)

## Instalação

- Baixe e instale as ferramentas requeridas;
- No VSCode, abra uma nova pasta/crie um novo projeto;
- Abra o terminal (Terminal -> Novo Terminal);
- Inicialize a pasta como um novo repositório:

> git init

- Clone este repositório:

> git clone https://github.com/RaphaelNunes10/paytour-test.git

- Instale os pacotes do projeto:

> npm install
> ou
> yarn install

- Rode o projeto:

> npm run dev
> ou
> yarn dev

- O projeto abrirá por padrão em http://localhost:3000/ ou http://127.0.0.1:3000/.

OBS.: Se você já tiver um projeto rodando no endereço padrão de _localhost_ na porta 3000 o projeto abrirá em uma nova porta, então fique atento no que apareçe no terminal.

## _Overview_

Este projeto utiliza uma variável que deve ser incluída em um arquivo .env(na pasta raíz) ou nas variáveis de ambiente do serviço de armazenamento:

> BASE_API_URL=-rota-api-

O projeto em Laravel que disponibiliza o serviço de API, incluindo armazenamento em banco de dados e envio de email se encontra em: https://github.com/RaphaelNunes10/paytour-test-api

Quando o serviço é inicializado localmente, a variável deve receber o seguinte valor, por padrão:

> BASE_API_URL=http://127.0.0.1:8000/api
