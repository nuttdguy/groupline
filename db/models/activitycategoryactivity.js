'use strict';
module.exports = (sequelize, DataTypes) => {
  var ActivityCategoryActivity = sequelize.define('ActivityCategoryActivity', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
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
    activityCategoryId: {
      type: DataTypes.INTEGER,
      field: 'activity_category_id'
    },
  }, {
    underscored: true,
    classMethods: {
    }
  });

  ActivityCategoryActivity.associate = function(m) {

    m.ActivityCategory.belongsToMany(m.Activity, {
      as: 'Activities',
      through: {
        model: m.ActivityCategoryActivity
      },
      foreignKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    m.Activity.belongsToMany(m.ActivityCategory, {
      as: 'ActivityCategories',
      through: {
        model: m.ActivityCategoryActivity
      },
      foreignKey: 'activity_category_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  };
  return ActivityCategoryActivity;
};