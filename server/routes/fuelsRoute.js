const { fuelsController } = require("../controllers");
const auth = require("../middlewares/auth")

const fuelsRoutes = require("express").Router();

fuelsRoutes.get("/", fuelsController.getFuels);
fuelsRoutes.get("/:id", fuelsController.findFuel)
fuelsRoutes.post("/add", auth, fuelsController.addFuel);
fuelsRoutes.get("/delete/:id", auth, fuelsController.deleteFuel)

module.exports = fuelsRoutes;
