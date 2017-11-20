'use strict';
module.exports = (sequelize, DataTypes) => {
  var ActivityCategory = sequelize.define('ActivityCategory', {
      activityCategoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'activity_category_id'
      },
      categoryName: {
        type: DataTypes.STRING,
        field: 'category_name'
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
      classMethods: {

      }
    });

  ActivityCategory.findAll({
    ActivityCategoryId: true,
    ActivityCategoryName: true
  });

  ActivityCategory.associate = function (models) {
    ActivityCategory.belongsTo(models.Activity, {
      foreignKey: 'activity_id',
      sourceKey: 'activity_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  };
  return ActivityCategory;
};