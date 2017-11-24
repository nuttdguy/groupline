'use strict';
module.exports = (sequelize, DataTypes) => {
  var ActivityMeetLocation = sequelize.define('ActivityMeetLocation', {
    activityMeetLocationId: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'activity_meet_location_id'
    },
    latitude: {
      type: DataTypes.INTEGER,
      field: 'latitude'
    },
    longitude: {
      type: DataTypes.INTEGER,
      field: 'longitude'
    },
    address: {
      type: DataTypes.INTEGER,
      field: 'address'
    },
    detail: {
      type: DataTypes.INTEGER,
      field: 'detail'
    },
    isActive: {
      type: DataTypes.INTEGER,
      field: 'is_active',
      defaultValue: true
    },
    activityId: {
      type: DataTypes.INTEGER,
      field: 'activity_id'
    },
  }, {
    underscored: true,
    classMethods: {}
  });

  ActivityMeetLocation.associate = function(m) {
    ActivityMeetLocation.belongsTo(m.Activity, {
      foreignKey: 'activity_id',
      sourceKey: 'activity_id'
    });

    m.Activity.hasMany(m.ActivityTime, {
      foreignKey: 'activity_meet_location_id',
      targetKey: 'activity_meet_location_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  };

  return ActivityMeetLocation;
};
