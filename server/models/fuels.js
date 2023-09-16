"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class fuels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      fuels.belongsTo(models.vehicles);
    }
  }
  fuels.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "name can't empty",
          },
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "quantity can't empty",
          },
        },
      },
      vehicleId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "fuels",
    }
  );
  return fuels;
};
