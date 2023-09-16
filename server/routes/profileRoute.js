const { profileController } = require("../controllers");
const auth = require("../middlewares/auth")
const profileRoutes = require("express").Router();

profileRoutes.get("/", profileController.getProfiles);
profileRoutes.get("/:id", profileController.findProfile)
profileRoutes.post("/add", profileController.addProfile);
profileRoutes.put("/update/:id", auth, profileController.editProfile);
profileRoutes.get("/delete/:id", auth, profileController.deleteProfile);
profileRoutes.post("/register", profileController.register)
profileRoutes.post("/login", profileController.login)

module.exports = profileRoutes;
