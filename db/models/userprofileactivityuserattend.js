'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserProfileActivityUserAttend = sequelize.define('UserProfileActivityUserAttend', {
    id: {
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: "is_active"
    },
    userProfileId: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'user_profile_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
    activityId: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
    userAttendId: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'user_attend_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
  }, {
    underscored: true,
    classMethods: {
    }
  });

  UserProfileActivityUserAttend.associate = function(m) {

    m.UserProfile.belongsToMany(m.Activity, {
      through: {
        model: UserProfileActivityUserAttend,
        as: 'user_profile_activity_user_attends'
      },
      foreignKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    m.Activity.belongsToMany(m.UserProfile, {
      through: {
        model: UserProfileActivityUserAttend,
        as: 'user_profile_activity_user_attends'
      },
      foreignKey: 'user_profile_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

  };
  return UserProfileActivityUserAttend;
};