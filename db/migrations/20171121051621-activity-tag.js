'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ActivityTags', {
      activityTagId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'activity_tag_id'
      },
      activityTagName: {
        type: Sequelize.STRING,
        field: 'activity_tag_name'
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        field: 'is_active'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ActivityTags');
  }
};