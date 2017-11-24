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
        field: 'is_active',
        defaultValue: true
      }
    },
    {
      underscored: true,
      classMethods: {}
    });


  ActivityCategory.associate = function (m) {

    ActivityCategory.hasMany(m.ActivityCategoryActivity, {
      foreignKey: 'activity_category_id',
      targetKey: 'activity_category_id'
    });
  };
  return ActivityCategory;
};