'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserProfiles', {
      userProfileId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'user_profile_id'
      },
      username: {
        type: Sequelize.STRING,
        field: 'user_name'
      },
      password: {
        type: Sequelize.STRING,
        field: 'password'
      },
      firstName: {
        type: Sequelize.STRING,
        field: 'first_name'
      },
      lastName: {
        type: Sequelize.STRING,
        field: 'last_name'
      },
      bio: {
        type: Sequelize.TEXT,
        field: 'bio'
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
    queryInterface.removeConstraint('UserProfiles', 'user_profile_id').then(function() {
      return queryInterface.dropTable('UserProfiles');
    });
  }
};