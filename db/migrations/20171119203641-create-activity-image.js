'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ActivityImages', {
      activityImageId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'activity_image_id'
      },
      imageUrl: {
        type: Sequelize.STRING,
        field: 'image_url'
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
      },
      activityDetailId: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        onUpdate: 'cascade',
        field: 'activity_detail_id',
        references: {
          model: 'ActivityDetails',
          key: 'activity_detail_id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('ActivityImages');
  }
};