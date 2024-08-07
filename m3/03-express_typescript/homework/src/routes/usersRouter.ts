import { Router } from "express";
import {
  //
  getUsersController,
  getUserByIdController,
  createUserController,
  loginUserController,
} from "../controllers/usersController";

const usersRouter = Router();

usersRouter.get("/", getUsersController);
usersRouter.get("/:id", getUserByIdController);
usersRouter.post("/register", createUserController);
usersRouter.post("/login", loginUserController);

export default usersRouter;
