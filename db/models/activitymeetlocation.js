'use strict';
module.exports = (sequelize, DataTypes) => {
  var ActivityMeetLocation = sequelize.define('ActivityMeetLocation', {
    activityMeetLocationId: DataTypes.INTEGER,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    address: DataTypes.STRING,
    detail: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    activityId: DataTypes.INTEGER
  }, {
    underscored: true,
    classMethods: {}
  });

  ActivityMeetLocation.associate = function(models) {
    ActivityMeetLocation.belongsTo(models.Activity, {
      foreignKey: 'activity_id',
      sourceKey: 'activity_id'
    });
  };

  return ActivityMeetLocation;
};
