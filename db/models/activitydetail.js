'use strict';
module.exports = (sequelize, DataTypes) => {
    var ActivityDetail = sequelize.define('ActivityDetail', {
            start_date: {
                type: DataTypes.DATE,
                defaultValue: new Date()
            },
            end_date: {
                type: DataTypes.DATE,
                defaultValue: new Date()
            },
            min_usrs: DataTypes.INTEGER,
            max_usrs: DataTypes.INTEGER,
            time_end: {
                type: DataTypes.DATE,
                defaultValue: new Date()
            },
            time_start: {
                type: DataTypes.DATE,
                defaultValue: new Date()
            },
        }, {
            classMethods: {
                associate: function (models) {
                    ActivityDetail.belongsTo(models.Activity, {
                        onDelete: 'CASCADE'
                    });
                }
            }
        }
        )
    ;
    return ActivityDetail;
};