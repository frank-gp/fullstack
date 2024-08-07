import usersRouter from "./usersRouter";
import turnsRouter from "./turnsRouter";

import { Router } from "express";
import authToken from "../middleware/authToken";

const indexRouter = Router();

indexRouter.use("/users",authToken, usersRouter);
indexRouter.use("/turns", turnsRouter);

export default indexRouter;
