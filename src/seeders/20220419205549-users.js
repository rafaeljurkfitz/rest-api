'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('users', [
        {
            login: 'Jose_Silva45',
            password: 'sha1$053edb6d$1$f29d1dcd0b7d44ed9c17a951a1c58206d047d322',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            login: 'MariaEduarda852',
            password: 'sha1$e97a1224$1$28714acc1e20ca3e712b3820248ddd612f86c048',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            login: 'GuilhermeRocha52',
            password: 'sha1$f5e30964$1$81b3abc5342d338ec9fcdc8440716a70583f8257',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        ], {});
    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('users', null, {});

    }
};
