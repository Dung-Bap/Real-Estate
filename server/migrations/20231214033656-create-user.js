/** @format */

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.literal('gen_random_uuid()'),
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
            },
            phone: {
                type: Sequelize.STRING,
                unique: true,
            },
            email: {
                type: Sequelize.STRING,
            },
            address: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
            role: {
                type: Sequelize.STRING,
            },
            avatar: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    },
};
