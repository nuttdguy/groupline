'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ActivityDetails', {
      activityDetailId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'activity_detail_id'
      },
      summary: {
        type: Sequelize.TEXT,
        field: 'summary'
      },
      startDate: {
        type: Sequelize.DATE,
        field: 'start_date'
      },
      endDate: {
        type: Sequelize.DATE,
        field: 'end_date'
      },
      minActor: {
        type: Sequelize.INTEGER,
        field: 'min_actor'
      },
      maxActor: {
        type: Sequelize.INTEGER,
        field: 'max_actor'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
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
    return queryInterface.dropTable('ActivityDetails');
  }
};