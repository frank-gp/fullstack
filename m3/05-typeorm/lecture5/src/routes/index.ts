import { Router } from "express";
import { createUser, getUsers, deleteUser, getUserById } from "../controllers/usersController";
import auth from "../middlewares/auth";
import { createVehicle, getVehicles } from "../controllers/vehiclesController";

const router: Router = Router();

router.post("/users", createUser);
router.get("/users", auth, getUsers);
router.get("/users/:id", auth, getUserById);
router.delete("/users/", deleteUser);

router.post("/vehicles/", createVehicle);
router.get("/vehicles/", getVehicles);


export default router;
