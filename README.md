<h1 align="center">
  <br>
    Rest API 
  <br>
  <br>
</h1>

##

<p align="center">
    <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-deploy">Deploy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-contributing">Contributing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#memo-license">License</a>
</p>

<p> A API Rest foi construída com o objetivo de aprender na pratica como funciona a transição de dados no back-end de uma aplicação com banco de dados através de requisições HTTP. Futuramente irei usar esse projeto como base para construir uma tele agenda..</p>

<p align="center">
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License MIT">
    </a>
</p>

## 📈 Features
<!-- ❌✅ -->
1.  ✅ - Construir servidor express para a API;
2.  ✅ - Configurar a config.json da database da aplicação;
3.  ✅ - Construir e executar de migrations e seeders;
4.  ✅ - Criar os models e configurar suas relações de database;
5.  ✅ - Criar os controllers e routes;
6.  ✅ - Validar as requisições básicas de HTTP através de JSON; 
7.  ✅ - POST,GET,PUT e DELETE;
8.  ✅ - Executar uma requisição HTTP envolvendo relação de tabelas; 
9.  ✅ - Adicionar alguma ferramenta para armazenar e acessar a senha do usuario como hash;
11. ❌ - Criar um ReportController para requisições mais complexas dos dados do banco;
...

## 🛠 Technologies

- NodeJS;
- Express;
- JSON;
- Sequelize;
- Nodemon;
- Sqlite;

## 🚀 Deploy

1. Instale os npm packages da aplicação.

```bash
   npm install
```

2. Execute as migrations para criar as tabelas do banco.

```bash
   sequelize db:migrate
```

3. Execute as seeders para popular as tabelas do banco com alguns dados para testes.

```bash
   sequelize db:seed:all
```

4. Inicie o servidor pelo nodemoon.
```bash
   npm run dev
```

5. Faça os testes de requisições pelo arquivo request.http 

## 💻 Getting started

- Clone esse repositório apenas usando: `git clone https://github.com/rafaeljurkfitz/rest-api.git`

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## :memo: License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
