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
    summary: {
      type: DataTypes.TEXT,
      field: 'summary'
    },
    detail: {
      type: DataTypes.TEXT,
      field: 'detail'
    },
    startDate: {
      type: DataTypes.DATE,
      field: 'start_date'
    },
    endDate: {
      type: DataTypes.DATE,
      field: 'end_date'
    },
    minActor: {
      type: DataTypes.INTEGER,
      field: 'min_actor'
    },
    maxActor: {
      type: DataTypes.INTEGER,
      field: 'max_actor'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: 'is_active',
      defaultValue: true
    },
  }, {
    underscored: true,
    classMethods: {

    },
    instanceMethods: {
    }
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

    // m.Activity.belongsToMany(m.UserProfile, {
    //   as: 'UserProfiles',
    //   through: {
    //     model: m.ProfileActivityFavorite
    //   },
    //   foreignKey: 'user_profile_id',
    //   onDelete: 'cascade',
    //   onUpdate: 'cascade'
    // });

    // Activity.hasMany(m.UserProfile, {
    //   foreignKey: 'activity_id',
    //   targetKey: 'activity_id'
    // });


    Activity.hasMany(m.ProfileActivityFavorite, {
      foreignKey: 'activity_id',
      targetKey: 'activity_id'
    });

  };


  return Activity;
};
