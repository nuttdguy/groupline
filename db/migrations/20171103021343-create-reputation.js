'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Reputations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            reputation_value: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            UserActivityId: {
                type: Sequelize.INTEGER,
                onDelete: 'cascade',
                references: {
                    model: 'UserActivities',
                    key: 'id'
                }
            }
        // }).then( () => {
        //     return queryInterface.addConstraint('Reputations', ['id'], {
        //         type: 'FOREIGN-KEY',
        //         name: 'fk_user_activity',
        //         onDelete: 'cascade',
        //         onUpdate: 'cascade',
        //         references: {
        //             table: 'UserActivities',
        //             field: 'id'
        //         }
        //     })
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Reputations');
    }
};