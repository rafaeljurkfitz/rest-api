const User = require('../models').Users;
const passwordHash = require('password-hash');

module.exports = {
    //Metodo POST - Criar usuario.
    async store(req, res) {
        let { login, password } = req.body;
        //hash the password
        password = passwordHash.generate(password);
        const user = await User.create({ login, password });
        return res.json(user);
    },

    //Metodo GET - Listar todos usuarios.
    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },

    //Metodo GET - Listar usuario por id.
    async search_id(req, res) {
        const user = await User.findByPk(req.params.id);
        return res.json(user);
    },

    //Metodo PUT - Alterar dados do usuario por id.
    async update_id(req, res) {
        const user = await User.findByPk(req.params.id);
        let { login, password } = req.body;
        password = passwordHash.generate(password);
        await user.update({
            login: login,
            password: password
        });

        return res.json(user);
    },

    //Metodo DELETE - Deletando usuario por id.
    async delete_id(req, res) {
        const user = await User.findByPk(req.params.id);
        await user.destroy();
        return res.json({ message: "O usuario foi deletado com sucesso!" })
    }
};