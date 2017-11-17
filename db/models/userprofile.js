'use strict';

const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  var UserProfile = sequelize.define('UserProfile', {
      userProfileId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'user_profile_id'
      },
      userName: {
        type: DataTypes.STRING,
        field: 'user_name'
      },
      password: {
        type: DataTypes.STRING,
        field: 'password'
      },
      firstName: {
        type: DataTypes.STRING,
        field: 'first_name'
      },
      lastName: {
        type: DataTypes.STRING,
        field: 'last_name'
      },
      bio: {
        type: DataTypes.TEXT,
        field: 'bio'
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: 'is_active'
      }
    },
    {
      underscored: true
    },
    {
      classMethods: {}
    });

  UserProfile.associate = function (models) {

    UserProfile.belongsToMany(models.Activity, {
        as: 'Activities',
        through: 'ProfileActivityFavorite',
        foreignKey: 'activity_id',
        targetKey: 'activity_id'
      });
  };

  UserProfile.prototype.generateHash = function (password) {
    let hashedPass = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    return hashedPass;
  };

  UserProfile.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  return UserProfile;
}
;