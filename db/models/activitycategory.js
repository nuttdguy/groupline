'use strict';
module.exports = (sequelize, DataTypes) => {
  var ActivityCategory = sequelize.define('ActivityCategory', {
      activityCategoriesId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'activity_categories_id'
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
      classMethods: {}
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