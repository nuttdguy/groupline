'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserProfileActivity = sequelize.define('UserProfileActivity', {
    profileActivityFavoriteId: {
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'user_profile_activity_id'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: 'is_active',
      defaultValue: true
    },
    activityId: {
      type: DataTypes.INTEGER,
      field: 'activity_id',
      primaryKey: true,
      // defaultValue: 1
    },
    userProfileId: {
      type: DataTypes.INTEGER,
      field: 'user_profile_id',
      primaryKey: true,
      // defaultValue: 1
    },
  }, {
    underscored: true,
    classMethods: {},
    hooks: {
      beforeCreate: activity => {
        // code here
      },
      beforeUpdate: activity => {
        // code here
      }
    }
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