'use strict';
module.exports = (sequelize, DataTypes) => {
  var ActivityLocation = sequelize.define('ActivityLocation', {
    activityLocationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: 'activity_location_id'
    },
    latitude: {
      type: DataTypes.FLOAT,
      field: 'latitude'
    },
    longitude: {
      type: DataTypes.FLOAT,
      field: 'longitude'
    },
    address: {
      type: DataTypes.STRING,
      field: 'address'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: 'is_active',
      defaultValue: true
    },
    activityDetailId: {
      type: DataTypes.INTEGER,
      field: 'activity_detail_id'
    },
  }, {
    underscored: true,
    classMethods: {

    }
  });

  ActivityLocation.associate = function(models) {
    ActivityLocation.belongsTo(models.ActivityDetail, {
      foreignKey: 'activity_detail_id',
      sourceKey: 'activity_detail_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  };
  return ActivityLocation;
};