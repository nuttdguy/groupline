'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Activities', {
      activityId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'activity_id'
      },
      activityName: {
        type: Sequelize.STRING,
        field: 'activity_name'
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        field: 'is_active'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('ActivityCategories', 'activity_id').then( () => {
    });

    queryInterface.removeConstraint('ActivityTags', 'activity_id').then( () => {
    });

    queryInterface.removeConstraint('ProfileActivityFavorites', 'activity_id').then( () => {
    });

    queryInterface.removeConstraint('ActivityDetails', 'activity_id').then( () => {
    });

    return queryInterface.dropTable('Activities');

  }
};
