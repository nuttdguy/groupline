'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ActivityMeetLocations', {
      activityMeetLocationId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'activity_meet_location_id'
      },
      latitude: {
        type: Sequelize.INTEGER,
        field: 'latitude'
      },
      longitude: {
        type: Sequelize.INTEGER,
        field: 'longitude'
      },
      address: {
        type: Sequelize.INTEGER,
        field: 'address'
      },
      detail: {
        type: Sequelize.INTEGER,
        field: 'detail'
      },
      isActive: {
        type: Sequelize.INTEGER,
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
    });
    return queryInterface.dropTable('ActivityMeetLocations');
  }
};
