'use strict';
module.exports = (sequelize, DataTypes) => {
    var Reputation = sequelize.define('Reputation', {
        reputation_value: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function (models) {
                Reputation.belongsTo(models.UserActivity, {
                    onDelete: "CASCADE"
                })
            }
        }
    });
    return Reputation;
};