'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProfileActivityFavorite = sequelize.define('ProfileActivityFavorite', {
    profileActivityFavoriteId: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'profile_activity_favorite_id'
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
      field: 'is_active'
    }
  }, {
    underscored: true,
    classMethods: {}
  });

  ProfileActivityFavorite.associate = function (m) {

    m.UserProfile.belongsToMany(m.Activity, {
      as: 'UserProfiles',
      through: {
        model: m.ProfileActivityFavorite, unique: false
      },
      foreignKey: 'user_profile_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    m.Activity.belongsToMany(m.UserProfile, {
      as: 'Activities',
      through: {
        model: m.ProfileActivityFavorite, unique: false
      },
      foreignKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

  };
  return ProfileActivityFavorite;
};