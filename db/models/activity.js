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
                    foreignKey: 'activity_id',
                    onDelete: 'CASCADE'
                });
                Activity.hasMany(models.ActivityCategory, {
                    foreignKey: 'activity_id',
                    onDelete: 'CASCADE'
                });
                Activity.hasMany(models.ActivityDetail, {
                    foreignKey: 'activity_id',
                    onDelete: 'CASCADE'
                })
            }
        }
    });
    return Activity;
};


