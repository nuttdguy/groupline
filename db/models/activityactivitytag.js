'use strict';
module.exports = (sequelize, DataTypes) => {
  var ActivityActivityTag = sequelize.define('ActivityActivityTag', {
    activityActivityTagId: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'activity_activity_tag_id'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: 'is_active',
      defaultValue: true
    },
    activityId: {
      type: DataTypes.INTEGER,
      field: 'activity_id'
    },
    activityTagId: {
      type: DataTypes.INTEGER,
      field: 'activity_tag_id'
    },
  }, {
    underscored: true,
    classMethods: {
    }
  });

  ActivityActivityTag.associate = function(m) {

    m.ActivityTag.belongsToMany(m.Activity, {
      as: 'Activities',
      through: {
        model: m.ActivityActivityTag
      },
      foreignKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    m.Activity.belongsToMany(m.ActivityTag, {
      as: 'ActivityTags',
      through: {
        model: m.ActivityActivityTag
      },
      foreignKey: 'activity_tag_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

  };
  return ActivityActivityTag;
};