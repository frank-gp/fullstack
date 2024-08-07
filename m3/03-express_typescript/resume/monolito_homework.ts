// ========== src/controllers/turnsController.ts ==========
import { Request, Response } from "express";

const getTurnsController = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get Turns" });
};

const getTurnByIdController = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get Turn" });
};

const createTurnController = async (req: Request, res: Response) => {
  res.status(201).json({ message: "Create Turn" });
};

const cancelTurnController = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Cancel Turn" });
};

// ========== src/controllers/usersController.ts ==========

const getUsersController = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get Users" });
};

const getUserByIdController = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get User" });
};

const createUserController = async (req: Request, res: Response) => {
  res.status(201).json({ message: "Create User" });
};

const loginUserController = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Login User" });
};

// ========== src/routes/turnsRouter.ts ==========
const { Router } = require("express");

const turnsRouter = Router();

turnsRouter.get("/", getTurnsController);
turnsRouter.get("/:id", getTurnByIdController);
turnsRouter.post("/schedule", createTurnController);
turnsRouter.post("/cancel", cancelTurnController);

// ========== src/routes/usersRouter.ts ==========
const usersRouter = Router();

usersRouter.get("/", getUsersController);
usersRouter.get("/:id", getUserByIdController);
usersRouter.post("/register", createUserController);
usersRouter.post("/login", loginUserController);

// ========== src/routes/indexRouter.ts ==========
const indexRouter = Router();

indexRouter.use("/users", usersRouter);
indexRouter.use("/turns", turnsRouter);

// ========== src/server.ts ==========
import express from "express";

const server = express();

server.use(express.json());
server.use(indexRouter);

// ========== src/config/envs.ts ==========
import "dotenv/config";

const PORT = process.env.PORT || 3000;

//  ========== src/index.ts ==========
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
