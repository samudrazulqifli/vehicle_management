const routes = require("express").Router();
routes.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "VehicleManagement",
  });
});

const profileRoute = require("./profileRoute")
const maintenanceRoute = require("./maintenanceRoute")
const vehicleRoute = require("./vehicleRoute")
const fuelsRoute = require("./fuelsRoute")

routes.use("/profile", profileRoute)
routes.use("/maintenance", maintenanceRoute)
routes.use("/vehicle", vehicleRoute)
routes.use("/fuels", fuelsRoute)


module.exports = routes