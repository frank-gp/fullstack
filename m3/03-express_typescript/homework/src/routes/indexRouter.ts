import usersRouter from "./usersRouter";
import turnsRouter from "./turnsRouter";
import { Router } from "express";

const indexRouter = Router();

indexRouter.use("/users", usersRouter);
indexRouter.use("/turns", turnsRouter);

export default indexRouter;
