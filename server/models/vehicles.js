'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      vehicles.hasMany(models.fuels)
      vehicles.hasMany(models.maintenance)
      vehicles.belongsTo(models.profiles)
    }
  }
  vehicles.init({
    name: {
      type:DataTypes.STRING,
      validate: {
        notEmpty : {
          msg : "name can't be empty"
        }
      }
    },
    type: {
      type:DataTypes.STRING,
      validate: {
        notEmpty : {
          msg : "name can't be empty"
        }
      }
    },
    assignmentStatus: DataTypes.STRING,
    maintenanceStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vehicles',
  });
  return vehicles;
};