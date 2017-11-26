'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserAttend = sequelize.define('UserAttend', {
    userAttendId: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'user_attend_id'
    },
    description: {
      type: DataTypes.TEXT,
      field: 'description'
    },
    attendAt: {
      type: DataTypes.DATE,
      field: 'attend_at'
    },
    hasAttend: {
      type: DataTypes.BOOLEAN,
      field: 'has_attend'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: 'is_active',
      defaultValue: true
    },
    comment: {
      type: DataTypes.TEXT,
      field: 'comment'
    },
    attendCodeId: {
      type: DataTypes.INTEGER,
      field: 'attend_code_id'
    },
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserAttend;
};