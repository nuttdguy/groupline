'use strict';
module.exports = (sequelize, DataTypes) => {
  var ActivityDetail = sequelize.define('ActivityDetail', {
    activityDetailId: {
      type: DataTypes.INTEGER,
      field: 'activity_detail_id',
      primaryKey: true
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
    activityId: {
      type: DataTypes.INTEGER,
      field: 'activity_id',
    }
  }, {
    underscored: true,
    classMethods: {
    }
  });

  ActivityDetail.associate = function(models) {
    ActivityDetail.belongsTo(models.Activity, {
      foreignKey: 'activity_id',
      sourceKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  };
  return ActivityDetail;
};