'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ActivityLocations', {
      activityLocationId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'activity_location_id'
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
      isActive: {
        type: Sequelize.BOOLEAN,
        field: 'is_active'
      },
      activityDetailId: {
        type: Sequelize.INTEGER,
        field: 'activity_detail_id',
        foreignKey: 'activity_detail_id',
        onDelete: 'cascade',
        onUpdate: 'cascade',
        references: {
          model: 'ActivityDetails',
          key: 'activity_detail_id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('ActivityLocations');
  }
};