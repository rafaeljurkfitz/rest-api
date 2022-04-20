'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('users', [
        {
            login: 'xxxgafeu',
            password: 'comandantesupremo666',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            login: 'teste2',
            password: 'senhasteste',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            login: 'anarcobaixista',
            password: 'euamoamari',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        ], {});
    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('users', null, {});

    }
};
