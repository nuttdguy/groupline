'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ActivityMeetLocations', {
      activityMeetLocationId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      address: {
        type: Sequelize.STRING
      },
      detail: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      activityId: {
        type: Sequelize.INTEGER,
        field: 'activity_id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
        references: {
            model: 'Activities',
            key: 'activity_id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('ActivityMeetLocations', 'ActivityMeetLocations_activity_id_fkey').then( () => {
    })
    return queryInterface.dropTable('ActivityMeetLocations');
  }
};
