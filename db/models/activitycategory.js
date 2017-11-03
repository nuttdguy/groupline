'use strict';
module.exports = (sequelize, DataTypes) => {
    var ActivityCategory = sequelize.define('ActivityCategory', {
        category_name: DataTypes.STRING,
        isActive: {
            type: DataTypes.BOOLEAN,
            default: true
        }
    }, {
        classMethods: {
            associate: function (models) {
                ActivityCategory.belongsTo(models.Activity, {
                    onDelete: 'CASCADE'
                });
            }
        }
    });
    return ActivityCategory;
};