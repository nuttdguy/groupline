'use strict';
module.exports = (sequelize, DataTypes) => {
  var ActivityTime = sequelize.define('ActivityTime', {
    activityTimeId: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'activity_time_id'
    },
    startTime:{
      type: DataTypes.TIME,
      field: 'start_time'
    },
    endTime: {
      type: DataTypes.TIME,
      field: 'end_time'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: 'is_active'
    },
    activityMeetLocationId: {
      type: DataTypes.INTEGER,
      field: 'activity_meet_location_id',
      references: {
        model: 'ActivityMeetLocation',
        key: 'activity_meet_location_id'
      }
    },
  }, {
    underscored: true,
    classMethods: {
    }
  });

  ActivityTime.associate = function(m) {
    ActivityTime.belongsTo(m.ActivityMeetLocation, {
      foreignKey: 'activity_meet_location_id',
      sourceKey: 'activity_meet_location_id'
    })
  };
  return ActivityTime;
};