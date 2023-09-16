const { fuels } = require("../models");
class fuelsController {
  static async getFuels(req, res) {
    try {
      const result = await fuels.findAll();
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
  static async findFuel(req, res) {
    try {
      const id = req.params.id;
      const result = await fuels.findOne({ where: { id } });
      if (result !== null) {
        res.status(200).json({
          status: true,
          data: result
        });
      } else {
        res.status(404).json({
          status: true,
          message: "fuel not found",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        erorr: err,
      });
    }
  }
  static async addFuel(req, res) {
    try {
      const { name, quantity, vehicleId } = req.body;
      const result = await fuels.create({
        name,
        quantity,
        vehicleId
      });
      if (result !== null) {
        res.status(201).json({
          status: true,
          message: "fuel has been added",
          data: result,
        });
      } else {
        res.status(400).json({
          status: false,
          message: "fuel can't added in list",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        eror: err,
      });
    }
  }
  static async editFuel(req, res) {
    try {
      const id = req.params.id;
      const { name, quantity, vehicleId } = req.body;

      const result = await fuels.update(
        {
            name,
            quantity,
            vehicleId
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

  static async deleteFuel(req, res) {
    try {
      const id = req.params.id;
      const result = await fuels.destroy({ where: { id } });
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

module.exports = fuelsController;
