const { maintenanceController } = require("../controllers");
const auth = require("../middlewares/auth")
const maintenanceRoutes = require("express").Router();

maintenanceRoutes.get("/", maintenanceController.getMaintenances);
maintenanceRoutes.get("/:id", maintenanceController.findMaintenance)
maintenanceRoutes.post("/add", auth, maintenanceController.addMaintenance);
maintenanceRoutes.get("/delete/:id", auth, maintenanceController.deleteMaintenance)
maintenanceRoutes.put("/update/:id", auth, maintenanceController.editMaintenance)

module.exports = maintenanceRoutes;

