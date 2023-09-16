const { vehicleController } = require("../controllers");
const auth = require("../middlewares/auth")

const vehicleRoutes = require("express").Router();

vehicleRoutes.get("/", vehicleController.getVehicles);
vehicleRoutes.get("/:id", vehicleController.findVehicle)
vehicleRoutes.post("/add", auth, vehicleController.addVehicle);
vehicleRoutes.put("/update/:id", auth, vehicleController.editVehicle);
vehicleRoutes.get("/delete/:id", auth, vehicleController.deleteVehicle);

module.exports = vehicleRoutes;
