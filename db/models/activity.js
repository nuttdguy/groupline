'use strict';

module.exports = (sequelize, DataTypes) => {

    var Activity = sequelize.define('Activity', {
        activity_name: DataTypes.STRING,
        isActive: {
            type: DataTypes.BOOLEAN,
            default: true
        }
    }, {
        classMethods: {
            associate: function (models) {
                Activity.hasMany(models.ActivityTag, {
                    foreignKey: 'ActivityId',
                    onDelete: 'CASCADE'
                });
                Activity.hasMany(models.ActivityCategory, {
                    foreignKey: 'ActivityId',
                    onDelete: 'CASCADE'
                });
                Activity.hasMany(models.ActivityDetail, {
                    foreignKey: 'ActivityId',
                    onDelete: 'CASCADE'
                })
            }
        }
    });
    return Activity;
};
