const { vehicles } = require("../models");
class vehiclesController {
  static async getVehicles(req, res) {
    try {
      const result = await vehicles.findAll();
      res.status(200).json({
        status: true,
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        eror: err,
      });
    }
  }
  static async findVehicle(req, res) {
    try {
      const id = req.params.id;
      const result = await vehicles.findOne({ where: { id } });
      if (result !== null) {
        res.status(200).json({
          status: true,
          data: result,
        });
      } else {
        res.status(404).json({
          status: true,
          message: "Vehicle not found",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        erorr: err,
      });
    }
  }
  static async addVehicle(req, res) {
    try {
      const { email, password, name, role, vehicleId } = req.body;
      const result = await vehicles.create({
        email,
        password,
        name,
        role,
        vehicleId,
      });
      if (result !== null) {
        res.status(201).json({
          status: true,
          message: "Vehicle has been added",
          data: result,
        });
      } else {
        res.status(400).json({
          status: false,
          message: "Vehicle can't added in list",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        eror: err,
      });
    }
  }
  static async editVehicle(req, res) {
    try {
      const id = req.params.id;
      const { email, password, name, role, vehicleId } = req.body;

      const result = await vehicles.update(
        {
          email,
          password,
          name,
          role,
          vehicleId,
        },
        { where: { id } }
      );
      res.status(200).json({
        status: true,
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        erorr: err,
      });
    }
  }

  static async deleteVehicle(req, res) {
    try {
      const id = req.params.id;
      const result = await vehicles.destroy({ where: { id } });
      res.status(200).json({
        status: true,
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        erorr: err,
      });
    }
  }
}

module.exports = vehiclesController;
