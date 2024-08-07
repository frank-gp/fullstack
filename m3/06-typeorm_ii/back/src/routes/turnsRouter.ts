import turnsController from "../controllers/turnsController";
import { Router } from "express";

const turnsRouter = Router();

turnsRouter.get("/", turnsController.getAllTurnsController);
turnsRouter.get("/:id", turnsController.getTurnByIdController);
turnsRouter.post("/schedule", turnsController.createTurnController);
turnsRouter.put("/cancel/:id", turnsController.cancelTurnController);
turnsRouter.delete("/delete/:id", turnsController.deleteTurnController);

export default turnsRouter;
