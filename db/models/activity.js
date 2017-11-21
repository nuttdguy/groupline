'use strict';

module.exports = (sequelize, DataTypes) => {
  var Activity = sequelize.define('Activity', {
      activityId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'activity_id'
      },
      activityHeading: {
        type: DataTypes.STRING,
        field: 'activity_heading'
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: 'is_active'
      }
    },
    {
      underscored: true,
    },
    {
      classMethods: {

      },
      instanceMethods: {}
    });

  Activity.associate = function (models) {

    Activity.hasMany(models.ActivityCategory, {
      foreignKey: 'activity_id',
      targetKey: 'activity_id'
    });

    Activity.hasMany(models.ActivityTag, {
      foreignKey: 'activity_id',
      targetKey: 'activity_id'
    });

    Activity.hasMany(models.ActivityDetail, {
      foreignKey: 'activity_id',
      targetKey: 'activity_id'
    });

    Activity.hasMany(models.ActivityMeetLocation, {
        foreignKey: 'activity_id',
        targetKey: 'activity_id'
    });


  };


  return Activity;
};
