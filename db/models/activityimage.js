'use strict';
module.exports = (sequelize, DataTypes) => {
  var ActivityImage = sequelize.define('ActivityImage', {
      activityImageId: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'activity_image_id'
      },
      imageUrl: {
        type: DataTypes.STRING,
        field: 'image_url'
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: 'is_active'
      },
      activityId: {
        type: DataTypes.INTEGER,
        field: 'activity_id'
      }
    },
    {
      underscored: true,
      classMethods: {}
    });

  ActivityImage.associate = function (m) {

    ActivityImage.belongsTo(m.Activity, {
      foreignKey: 'activity_id',
      sourceKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

  };
  return ActivityImage;
};