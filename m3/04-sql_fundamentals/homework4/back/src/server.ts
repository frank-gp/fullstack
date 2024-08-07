import express from "express";
import indexRouter from "./routes/indexRouter";
import morgan from "morgan";
import cors from "cors";

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(express.static("../front"));
server.use(indexRouter);

export default server;
