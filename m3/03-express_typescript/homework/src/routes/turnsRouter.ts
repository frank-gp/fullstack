// GET /turns - get all turns
// GET /turns/:id - get turn by id

// POST /turns/schedule - create new turn

// PUT /turns/cancel - cancel turn
import {
  //
  getTurnsController,
  getTurnByIdController,
  createTurnController,
  cancelTurnController,
} from "../controllers/turnsController";

const { Router } = require("express");

const turnsRouter = Router();

turnsRouter.get("/", getTurnsController);
turnsRouter.get("/:id", getTurnByIdController);
turnsRouter.post("/schedule", createTurnController);
turnsRouter.put("/cancel", cancelTurnController);

export default turnsRouter;
