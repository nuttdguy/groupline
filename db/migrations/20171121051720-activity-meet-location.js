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
        type: Sequelize.FLOAT,
        field: 'latitude'
      },
      longitude: {
        type: Sequelize.FLOAT,
        field: 'longitude'
      },
      address: {
        type: Sequelize.STRING,
        field: 'address'
      },
      detail: {
        type: Sequelize.TEXT,
        field: 'detail'
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
    return queryInterface.dropTable('ActivityMeetLocations');
  }
};
