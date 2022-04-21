'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('contacts', [
        {
            name: "Rafael",
            email: "rafaelsilva@gmail.com",
            phone_number: "551199632654",
            image_url: "./images",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: "Marcos",
            email: "Markos@brturbo.com.br",
            phone_number: "559876543210",
            image_url: "./images",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: "Maria",
            email: "maria@gmail.com",
            phone_number: "551198456654",
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
