'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ActivityCategoryActivities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        field: 'is_active'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      activityCategoryId: {
        type: Sequelize.INTEGER,
        field: 'activity_category_id',
        references: {
          model: 'ActivityCategories',
          key: 'activity_category_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      activityId: {
        type: Sequelize.INTEGER,
        field: 'activity_id',
        references: {
          model: 'Activities',
          key: 'activity_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ActivityCategoryActivities');
  }
};