'use strict';
module.exports = (sequelize, DataTypes) => {
  var ActivityImage = sequelize.define('ActivityImage', {
    activityImageId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'activity_image_id'
    },
    imageUrl: {
      type: DataTypes.STRING,
      field: 'image_url'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: 'is_active'
    }
  }, {
    underscored: true,
    classMethods: {

    }
  });

  ActivityImage.associate = function(models) {

    ActivityImage.belongsTo(models.ActivityDetail, {
      foreignKey: 'activity_detail_id',
      sourceKey: 'activity_detail_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

  };
  return ActivityImage;
};