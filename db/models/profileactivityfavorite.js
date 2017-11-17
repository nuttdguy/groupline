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

  ProfileActivityFavorite.associate = function (models) {
    ProfileActivityFavorite.belongsTo(models.UserProfile, {
      foreignKey: 'user_profile_id',
      targetKey: 'user_profile_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    ProfileActivityFavorite.belongsTo(models.Activity, {
      foreignKey: 'activity_id',
      targetKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  };
  return ProfileActivityFavorite;
};