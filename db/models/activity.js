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
        field: 'activity_heading'
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
      foreignKey: 'activity_id',
      targetKey: 'activity_id'
    });

    Activity.hasMany(m.ActivityTag, {
      foreignKey: 'activity_id',
      targetKey: 'activity_id'
    });

    Activity.hasMany(m.ActivityImage, {
      foreignKey: 'activity_id',
      targetKey: 'activity_id'
    });

    Activity.hasMany(m.ActivityMeetLocation, {
      foreignKey: 'activity_id',
      targetKey: 'activity_id'
    });

  };


  return Activity;
};
