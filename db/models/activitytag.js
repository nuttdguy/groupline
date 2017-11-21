'use strict';
module.exports = (sequelize, DataTypes) => {
  var ActivityTag = sequelize.define('ActivityTag', {
    activityTagId: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'activity_tag_id'
    },
    activityTagName: {
      type: DataTypes.STRING,
      field: 'activity_tag_name'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: 'is_active'
    },
    activityId: {
      type: DataTypes.INTEGER,
      field: 'activity_id'
    }
  }, {
    underscored: true,
    classMethods: {}
  });

  ActivityTag.associate = function (m) {
    ActivityTag.belongsTo(m.Activity, {
      sourceKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  };

  return ActivityTag;
};