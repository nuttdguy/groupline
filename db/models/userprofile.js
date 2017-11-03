'use strict';
module.exports = (sequelize, DataTypes) => {
    var UserProfile = sequelize.define('UserProfile', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        bio: DataTypes.TEXT,
        isActive: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function (models) {
                UserProfile.hasMany(models.UserActivity, {
                    foreignKey: 'userprofile_id',
                    onDelete: 'CASCADE'
                });
            }
        }
    });
    return UserProfile;
};