'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserProfileActivity = sequelize.define('UserProfileActivity', {
    profileActivityFavoriteId: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'user_profile_activity_id'
    },
    activityId: {
      type: DataTypes.INTEGER,
      field: 'activity_id'
    },
    userProfileId: {
      type: DataTypes.INTEGER,
      field: 'user_profile_id'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: 'is_active',
      defaultValue: true
    }
  }, {
    underscored: true,
    classMethods: {}
  });

  UserProfileActivity.associate = function (m) {

    m.UserProfile.belongsToMany(m.Activity, {
      as: 'Activities',
      through: {
        model: m.UserProfileActivity,
        as: 'UserProfileActivity'
      },
      foreignKey: 'activity_id'
    });

    m.Activity.belongsToMany(m.UserProfile, {
      as: 'UserProfiles',
      through: {
        model: m.UserProfileActivity,
        as: 'UserProfileActivity'
      },
      foreignKey: 'user_profile_id'
    });

  };
  return UserProfileActivity;
};