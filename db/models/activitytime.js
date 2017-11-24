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
      field: 'activity_time_id'
    },
    endTime: {
      type: DataTypes.TIME,
      field: 'activity_time_id'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: 'activity_time_id'
    },
    activityMeetLocationId: {
      type: DataTypes.INTEGER,
      field: 'activity_time_id',
      onDelete: 'cascade',
      onUpdate: 'cascade',
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
      sourceKey: 'activity_meet_location_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  };
  return ActivityTime;
};