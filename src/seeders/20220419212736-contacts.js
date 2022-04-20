'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('contacts', [
        {
            name: "Rafael",
            email: "rafael@teste.com.br",
            phone_number: "1236987414",
            image_url: "./images",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: "Markos",
            email: "Markos@teste.com.br",
            phone_number: "9876543210",
            image_url: "./images",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: "Mari",
            email: "mari@teste.com.br",
            phone_number: "anarcobaixista",
            image_url: "./images",
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        ], {});
    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('contacts', null, {});

    }
};
