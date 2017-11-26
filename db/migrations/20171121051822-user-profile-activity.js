'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserProfileActivities', {
      profileActivityFavoriteId: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        field: 'user_profile_activity_id'
      },
      userProfileId: {
        type: Sequelize.INTEGER,
        field: 'user_profile_id',
        primaryKey: true,
        onDelete: 'cascade',
        onUpdate: 'cascade',
        references: {
          model: 'UserProfiles',
          key: 'user_profile_id'
        }
      },
      activityId: {
        type: Sequelize.INTEGER,
        field: 'activity_id',
        primaryKey: true,
        references: {
          model: 'Activities',
          key: 'activity_id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        field: 'is_active'
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
      },
    });
  },
  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('UserProfileActivities');
  }
};