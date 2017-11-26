'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserProfileActivityUserAttends', {
      id: {
        allowNull: false,
        autoIncrement: true,
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
      userProfileId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'user_profile_id',
        references: {
          model: 'UserProfiles',
          key: 'user_profile_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      activityId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'activity_id',
        references: {
          model: 'Activities',
          key: 'activity_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      userAttendId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'user_attend_id',
        references: {
          model: 'UserAttends',
          key: 'user_attend_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    });
  },
  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('UserProfileActivityUserAttends');
  }
};