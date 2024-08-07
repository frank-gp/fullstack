import { Router } from "express";
import usersController from "../controllers/usersController";

const usersRouter = Router();

usersRouter.get("/", usersController.getAllUsersController);
usersRouter.get("/:id", usersController.getUserByIdController);
usersRouter.post("/register", usersController.registerUserController);
usersRouter.post("/login", usersController.loginUserController);

// temporal
usersRouter.patch("/credentials", usersController.getAllCredentialsController);

export default usersRouter;
