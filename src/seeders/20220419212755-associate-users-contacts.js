'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Users_Contacts', [
        {
            userId: 1,
            contactId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            userId: 1,
            contactId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            userId: 3,
            contactId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        ], {});
    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('Users_Contacts', null, {});

    }
};
