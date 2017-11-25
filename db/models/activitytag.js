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
    }
  }, {
    underscored: true,
    classMethods: {}
  });

  ActivityTag.associate = function (m) {

    ActivityTag.hasMany(m.ActivityActivityTag, {
      foreignKey: 'activity_tag_id',
      targetKey: 'activity_tag_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

  };

  return ActivityTag;
};