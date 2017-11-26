'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserAttends', {
      userAttendId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'user_attend_id'
      },
      description: {
        type: Sequelize.TEXT,
        field: 'description'
      },
      attendAt: {
        type: Sequelize.DATE,
        field: 'attend_at'
      },
      hasAttend: {
        type: Sequelize.BOOLEAN,
        field: 'has_attend'
      },
      comment: {
        type: Sequelize.TEXT,
        field: 'comment'
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
      attendCodeId: {
        type: Sequelize.INTEGER,
        field: "attend_code_id"
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserAttends');
  }
};