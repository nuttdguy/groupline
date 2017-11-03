'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('UserActivities', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            activity_description: {
                type: Sequelize.STRING
            },
            attended_at: {
                type: Sequelize.DATE
            },
            has_attended: {
                type: Sequelize.BOOLEAN
            },
            comment: {
                type: Sequelize.STRING
            },
            activity_date: {
                type: Sequelize.DATE
            },
            isActive: {
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            UserProfileId: {
                type: Sequelize.INTEGER,
                onDelete: 'cascade',
                references: {
                    model: 'UserProfiles',
                    key: 'id'
                }
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('UserActivities');
    }
};