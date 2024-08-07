import express, { Request, Response, NextFunction } from "express";
import indexRouter from "./routes/indexRouter";
import morgan from "morgan";
import cors from "cors";

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(express.static("../front"));
server.use(indexRouter);

// Error handling middleware
server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

export default server;
