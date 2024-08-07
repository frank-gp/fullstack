import { Router } from "express";
import usersController from "../controllers/usersController";
import authToken from "../middleware/authToken";

const usersRouter = Router();

usersRouter.get("/", authToken, usersController.getAllUsersController);
usersRouter.get("/:id", usersController.getUserByIdController);
usersRouter.post("/register", authToken, usersController.registerUserController);
usersRouter.post("/login", usersController.loginUserController);
usersRouter.delete("/delete/:id", usersController.deleteUserByIdController);

// temporal
usersRouter.patch("/credentials", usersController.getAllCredentialsController);
usersRouter.patch("/dropSchema", usersController.dropSchemaController);

export default usersRouter;
