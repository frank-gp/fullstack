// userRouter.js

const { Router } = require("express");
const usersController = require("../controllers/usersController.js");
const vehicleController = require("../controllers/vehicleController.js");
const validateId = require("../middleware/validateId.js");

const router = Router();

router.get("/users", usersController.getUsers);

router.get("/users/byName", usersController.getuserByName);

router.get("/users/:id", usersController.getUserById);

router.post("/users", usersController.createUser);

router.put("/users/addVehicle", usersController.addVehicle);

router.get("/vehicles", vehicleController.getAllVehicles);

router.post("/vehicles", vehicleController.createVehicle);

module.exports = router;
