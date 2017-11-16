'use strict';
module.exports = (sequelize, DataTypes) => {
  var Activity = sequelize.define('Activity', {
      activityId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'activity_id'
      },
      activityName: {
        type: DataTypes.STRING,
        field: 'activity_name'
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
      classMethods: {}
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

    Activity.belongsToMany(models.UserProfile, {
      as: 'UserProfiles',
      through: 'ProfileActivityFavorites',
      foreignKey: 'user_profile_id',
      targetKey: 'user_profile_id'
    });

  };


  return Activity;
};