'use strict';
module.exports = (sequelize, DataTypes) => {
  var Activity = sequelize.define('Activity', {
      activityId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'activity_id'
      },
      activityName: {
        type: DataTypes.STRING,
        field: 'activity_name'
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: 'is_active'
      }
    },
    {
      underscored: true,
    },
    {
      classMethods: {}
    });

  Activity.associate = function (models) {
    Activity.hasMany(models.ActivityCategory,
      { foreignKey: 'activity_id',
        targetKey: 'activity_id' })
  };
  return Activity;
};