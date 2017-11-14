'use strict';

module.exports = (sequelize, DataTypes) => {
    var ActivityTag = sequelize.define('ActivityTag', {
        tag_name: DataTypes.STRING,
        isActive: {
            type: DataTypes.BOOLEAN,
            default: true
        }
    }, {
        classMethods: {
            associate: function (models) {
                ActivityTag.belongsTo(models.Activity, {
                    // foreignKey: 'ActivityId',
                    onDelete: 'CASCADE'
                });
            }
        }
    });
    return ActivityTag;
};
