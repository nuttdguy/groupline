'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProfileActivityFavorites', {
      profileActivityFavoriteId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'profile_activity_favorite_id'
      },
      userProfileId: {
        type: Sequelize.INTEGER,
        field: 'user_profile_id',
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
    queryInterface.removeConstraint('ProfileActivityFavorites', 'user_profile_id').then( () => {
    });

    queryInterface.removeConstraint('ProfileActivityFavorites', 'activity_id').then( () => {
    });

    return queryInterface.dropTable('ProfileActivityFavorites');
  }
};