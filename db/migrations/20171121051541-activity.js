'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Activities', {
      activityId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'activity_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      title: {
        type: Sequelize.STRING,
        field: 'title'
      },
      summary: {
        type: Sequelize.TEXT,
        field: 'summary'
      },
      detail: {
        type: Sequelize.TEXT,
        field: 'detail'
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

    return queryInterface.dropTable('Activities');

  }
};
