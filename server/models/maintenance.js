"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class maintenance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      maintenance.belongsTo(models.vehicles);
    }
  }
  maintenance.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "name can't empty",
          },
        },
      },
      status: DataTypes.STRING,
      vehicleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "maintenance",
    }
  );
  return maintenance;
};
