'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ActivityCategories', {
      activityCategoriesId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'activity_categories_id'
      },
      categoryName: {
        type: Sequelize.STRING,
        field: "category_name"
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
      },
      activityId: {
        type: Sequelize.INTEGER,
        field: 'activity_id',
        foreignKey: {
          model: 'Activities',
          key: 'activity_id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ActivityCategories');
  }
};
