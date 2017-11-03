'use strict';
module.exports = (sequelize, DataTypes) => {
    var UserReasonCode = sequelize.define('UserReasonCode', {
        reason_description: DataTypes.STRING,
        is_active: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function (models) {
                UserReasonCode.belongsTo(models.UserActivity, {
                    onDelete: 'CASCADE'
                })
            }
        }
    });
    return UserReasonCode;
};