const express = require('express');
const routes = require('./src/routes/router');

const contact = require('./src/models').Contacts;
const user = require('./src/models').Users;
const associate_user_contact = require('./src/models').Users_Contacts;

//Inicializa o express.
const app = express();

//Habilita o app usar arquivo JSON
app.use(express.json());

//Usa o arquivo das rotas.
app.use(routes)

//Configura a porta a ser usada.
const port = process.env.PORT || 3333

app.listen(port, () => {
    console.log('--------------------------------------------------------');
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
    console.log('--------------------------------------------------------');
});