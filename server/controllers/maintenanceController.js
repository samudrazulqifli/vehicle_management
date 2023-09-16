const { maintenance } = require("../models");
class maintenanceController {
  static async getMaintenances(req, res) {
    try {
      const result = await maintenance.findAll();
      res.status(200).json({
        status: true,
        data: result
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        eror: err,
      });
    }
  }
  static async findMaintenance(req, res) {
    try {
      const id = req.params.id;
      const result = await maintenance.findOne({ where: { id } });
      if (result !== null) {
        res.status(200).json({
          status: true,
          data: result
        });
      } else {
        res.status(404).json({
          status: true,
          message: "Maintenance not found",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        erorr: err,
      });
    }
  }
  static async addMaintenance(req, res) {
    try {
      const { name, status, vehicleId } = req.body;
      const result = await maintenance.create({
        name,
        status,
        vehicleId
      });
      if (result !== null) {
        res.status(201).json({
          status: true,
          message: "Maintenance has been added",
          data: result,
        });
      } else {
        res.status(400).json({
          status: false,
          message: "Maintenance can't added in list",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        eror: err,
      });
    }
  }
  static async editMaintenance(req, res) {
    try {
      const id = req.params.id;
      const { name, status, vehicleId } = req.body;

      const result = await maintenance.update(
        {
            name, status, vehicleId
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

  static async deleteMaintenance(req, res) {
    try {
      const id = req.params.id;
      const result = await maintenance.destroy({ where: { id } });
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

module.exports = maintenanceController;
