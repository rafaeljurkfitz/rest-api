'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('users', [
        {
            login: 'Jose_Silva45',
            password: '@jgl52846',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            login: 'MariaEduarda852',
            password: '2584563214',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            login: 'GuilhermeRocha52',
            password: 'umapontenomeiodocaminho',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        ], {});
    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('users', null, {});

    }
};
