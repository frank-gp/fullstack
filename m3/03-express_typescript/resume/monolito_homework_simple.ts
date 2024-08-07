// ========== src/controllers/usersController.ts ==========
import { Request, Response } from "express";

const getUsersController = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get Users", date: new Date() });
};

// ========== src/routes/usersRouter.ts ==========
const { Router } = require("express");
const usersRouter = Router();

usersRouter.get("/", getUsersController);

// ========== src/routes/indexRouter.ts ==========
const indexRouter = Router();

indexRouter.use("/users", usersRouter);

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
