'use strict';

const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  var UserProfile = sequelize.define('UserProfile', {
    userProfileId: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'user_profile_id'
    },
    username: {
      type: DataTypes.STRING,
      field: 'username'
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
    profileUrl: {
      type: DataTypes.STRING,
      field: 'profile_url'
    },
    bio: {
      type: DataTypes.TEXT,
      field: 'bio'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: 'is_active'
    }
  }, {
    underscored: true,
    classMethods: {}
  });

  UserProfile.associate = function (m) {

    UserProfile.hasMany(m.UserProfileActivity, {
      foreignKey: 'user_profile_id',
      targetKey: 'user_profile_id',
      onDelete: 'cascade',
      onUpdate: 'cascade'
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