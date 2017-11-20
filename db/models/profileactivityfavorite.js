'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProfileActivityFavorite = sequelize.define('ProfileActivityFavorite', {
      profileActivityFavoriteId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
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
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    },
    {
      underscored: true
    },
    {
      classMethods: {
      }
    });

  ProfileActivityFavorite.associate = function (m) {

    m.UserProfile.belongsToMany(m.Activity,
      { as: 'UserProfiles',
        through: {
          model: m.ProfileActivityFavorite, unique: false },
          foreignKey: 'user_profile_id' });

    m.Activity.belongsToMany(m.UserProfile,
      { as: 'Activities',
        through: {
          model: m.ProfileActivityFavorite, unique: false },
          foreignKey: 'activity_id' });

  };
  return ProfileActivityFavorite;
};