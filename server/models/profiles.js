"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class profiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      profiles.hasMany(models.vehicles);
    }
  }
  profiles.init(
    {
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            msg: "check for the email format",
          },
        },
      },
      password: DataTypes.STRING,
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "name can't empty",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [["admin", "user"]],
            msg: "Must be admin or user",
          },
        },
      },
      vehicleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "profiles",
    }
  );
  return profiles;
};
