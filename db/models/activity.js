'use strict';

module.exports = (sequelize, DataTypes) => {
  var Activity = sequelize.define('Activity', {
      activityId: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'activity_id'
      },
      title: {
        type: DataTypes.STRING,
        field: 'title'
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: 'is_active'
      }
    }, {
      underscored: true,
      classMethods: {},
      instanceMethods: {}
    });

  Activity.associate = function (m) {

    Activity.hasMany(m.ActivityCategory, {
      targetKey: 'activity_id'
    });

    Activity.hasMany(m.ActivityTag, {
      targetKey: 'activity_id'
    });

    Activity.hasMany(m.ActivityImage, {
      targetKey: 'activity_id'
    });

    Activity.hasMany(m.ActivityMeetLocation, {
      targetKey: 'activity_id'
    });

  };


  return Activity;
};
