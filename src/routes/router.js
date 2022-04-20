const express = require('express');

const contact = require('../models').Contacts;
const user = require('../models').Users;

const ContactController = require('../controller/contactController')
const UserController = require('../controller/userController')

const router = express.Router();

/*
    POST -> Inserir um dado
    GET -> Buscar um/mais dados
    PUT -> Alterar um dado
    DELETE -> Remover um dado
*/

//Usuarios
//Listar todos os usuarios
router.get('/listarUsuarios', UserController.index);

//Listar um usuario por id
router.get('/listarUsuario/:id', UserController.search_id);

//Criar um usuario
router.post('/adicionarUsuario', UserController.store);

//Alterar um usuario por id
router.put('/alterarUsuario/:id', UserController.update_id);

//Deletar um usuario por id
router.delete('/deletarUsuario/:id', UserController.delete_id);

//Contatos
//Listar todos os contatos
router.get('/listarContatos', ContactController.index );

//Listar um contato pelo id
router.get('/listarContato/:id', ContactController.search_id);

//Listar um usuario por id e seus contatos
router.get('/listarUsuarioContatos/:id', ContactController.searchUserAndContacts_id);

//Criar contato
router.post('/adicionarContato', ContactController.store);

//Alterar contato pelo id
router.put('/alterarContato/:id', ContactController.update_id);

//Deletar contato pelo id
router.delete('/deletarContato/:id', ContactController.delete_id);

module.exports = router;