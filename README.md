<h1 style="text-align: center">Anúncio Vagas</h1>

O projeto consiste na exibição e cadastrado de anúncios de vagas.
### Como funciona

A aplicação possui as seguintes páginas:

- Lista em cards dos anúncios
- Cadastro de um novo anúncio

A simulação do back-end é feito atráves do [JSON-SERVER](https://github.com/typicode/json-server "JSON-SERVER") hospedado no Heroku.

O projeto poderá ser encontrado em [Anuncio Vagas Api](https://github.com/FeliipeAC/anuncio-vagas-api).

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/).
- [Angular/CLI](https://angular.io/cli)
- [JSON-SERVER](https://github.com/typicode/json-server)

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Executando o projeto

Acesse [Anúncio Vagas](https://anuncio-vagas.herokuapp.com/home)

Ou execute localmente

```bash
# Clone este repositório
$ git clone <https://github.com/FeliipeAC/anuncio-vagas>

# Acesse a pasta do projeto no terminal/cmd
$ cd anuncio-vagas

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ ng serve

# Executar o JSON-SERVER localmente
$ json-server --watch db.json
```

Caso tenha executado o json-server localmente ele rodará na porta:4300 - acesse 
<http://localhost:3000>. 

`Lembre-se de alterar a URL da API no arquivo de environment.`

A aplicação iniciará na porta:4200 - acesse <http://localhost:4200>

### Executando teste unitários

Execute `ng test` para realizar testes unitários via [Karma](https://karma-runner.github.io).

### Executando testes end-to-end

Execute `ng e2e` para realizar testes end-to-end via [Protractor](http://www.protractortest.org/).

### Autor

 <img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQE5c1YW999-mQ/profile-displayphoto-shrink_200_200/0/1572272493097?e=1625097600&v=beta&t=NngHf0HTr1M7L0YBMsU2IGpe4_QWu9BY3106XdAzvhs" width="100px;" alt=""/>
 <br />
 <sub><b>Felipe Andrade</b></sub></a>

[![Linkedin Badge](https://img.shields.io/badge/-Felipe%20Andrade-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/felipe-ac/)](https://www.linkedin.com/in/felipe-ac/)
