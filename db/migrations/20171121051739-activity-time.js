'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ActivityTimes', {
      activityTimeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'activity_time_id'
      },
      startTime: {
        type: Sequelize.DATE,
        field: 'start_time'
      },
      endTime: {
        type: Sequelize.DATE,
        field: 'end_time'
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
      activityMeetLocationId: {
        type: Sequelize.INTEGER,
        field: 'activity_meet_location_id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
        references: {
          model: 'ActivityMeetLocations',
          key: 'activity_meet_location_id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('ActivityTimes');
  }
};