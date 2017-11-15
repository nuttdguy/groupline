'use strict';
module.exports = (sequelize, DataTypes) => {
  var ActivityTag = sequelize.define('ActivityTag', {
    activityTagName: {
      type: DataTypes.STRING,
      field: 'activity_tag_name'
    },
    activityTagId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'activity_tag_id'
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

  ActivityTag.associate = function (models) {
    ActivityTag.belongsTo(models.Activity,
      {
        foreignKey: 'activity_id',
        sourceKey: 'activity_id'
      })
  }

  return ActivityTag;
};