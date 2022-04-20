const Contact = require('../models').Contacts;
const User = require('../models').Users;

module.exports = {
    //Metodo POST - Criar contato.
    async store(req, res) {
        const { name, email, phone_number, image_url } = req.body;
        const contact = await Contact.create({ name, email, phone_number, image_url });
        return res.json(contact);
    },

    //Metodo GET - Listar todos contatos.
    async index(req, res) {
        const contacts = await Contact.findAll();
        return res.json(contacts);
    },

    //Metodo GET - Listar contato por id.
    async search_id(req, res) {
        const contact = await Contact.findByPk(req.params.id);
        return res.json(contact);
    },

    //Metodo GET - Listar usuario por id e seus contatos. N:N
    async searchUserAndContacts_id(req, res) {
        const user = await User.findByPk(req.params.id,
            {
                attributes: ['id','login'],
                include: [{
                    association: 'contact', attributes: ['name'],
                    through: {
                        attributes: ['contactId']
                    }
                }]
            });

        return res.json(user);
    },

    //Metodo PUT - Alterar contato por id.
    async update_id(req, res) {
        const contact = await Contact.findByPk(req.params.id);
        const { name, email, phone_number, image_url } = req.body;
        await contact.update({
            name: name,
            email: email,
            phone_number: phone_number,
            image_url: image_url
        });

        return res.json(contact);
    },
    //Metodo delete - Deletar contato por id.
    async delete_id(req, res) {
        const contact = await Contact.findByPk(req.params.id);
        await contact.destroy();
        return res.json({ message: "O contato foi deletado com sucesso!" })
    }
};