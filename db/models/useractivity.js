'use strict';
module.exports = (sequelize, DataTypes) => {
    var UserActivity = sequelize.define('UserActivity', {
        activity_description: DataTypes.STRING,
        attended_at: DataTypes.DATE,
        has_attended: DataTypes.BOOLEAN,
        comment: DataTypes.STRING,
        activity_date: DataTypes.DATE,
        isActive: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function (models) {
                UserActivity.hasMany(models.UserReasonCode, {
                    foreignKey: 'useractivity_id',
                    onDelete: 'CASCADE'
                });
                UserActivity.hasMany(models.Reputation, {
                    foreignKey: 'useractivity_id',
                    onDelete: 'CASCADE'
                });
                UserActivity.belongsTo(models.UserProfile, {
                    onDelete: 'CASCADE'
                });
            }
        }
    });
    return UserActivity;
};

