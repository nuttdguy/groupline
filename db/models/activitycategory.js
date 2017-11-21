'use strict';
module.exports = (sequelize, DataTypes) => {
  var ActivityCategory = sequelize.define('ActivityCategory', {
      activityCategoryId: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'activity_category_id'
      },
      categoryName: {
        type: DataTypes.STRING,
        field: 'category_name'
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: 'is_active'
      },
      activityId: {
        type: DataTypes.INTEGER,
        field: 'activity_id'
      }
    },
    {
      underscored: true,
      classMethods: {}
    });


  ActivityCategory.associate = function (m) {
    ActivityCategory.belongsTo(m.Activity, {
      sourceKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  };
  return ActivityCategory;
};