'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ActivityActivityTags', {
      activityActivityTagId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'activity_activity_tag_id'
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
      activityTag: {
        type: Sequelize.INTEGER,
        field: 'activity_tag_id',
        references: {
          model: 'ActivityTags',
          key: 'activity_tag_id'
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
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ActivityActivityTags');
  }
};