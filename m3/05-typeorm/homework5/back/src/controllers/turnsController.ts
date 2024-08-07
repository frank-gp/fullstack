import { Request, Response } from "express";
import turnsService from "../services/turnsService";

export default {
  getAllTurnsController: async (req: Request, res: Response) => {
    try {
      res.json(await turnsService.getAllTurnsService());
    } catch (error) {
      res.status(500).json({ message: "error.message getAllTurnsController" });
    }
  },

  getTurnByIdController: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      res.status(200).json(await turnsService.getTurnByIdService(Number(id)));
    } catch (error) {
      res.status(500).json({ message: "error.message getTurnByIdController" });
    }
  },

  createTurnController: async (req: Request, res: Response) => {
    try {
      const { date, time, userId } = req.body;
      res.status(201).json(await turnsService.createTurnsService({ date, time, userId }));
    } catch (error) {
      res.status(500).json({ message: "error.message createTurnController" });
    }
  },

  cancelTurnController: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      res.status(200).json(await turnsService.cancelTurnService(Number(id)));
    } catch (error) {
      res.status(500).json({ message: "error.message cancelTurnController" });
    }
  },

  deleteTurnController: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      res.status(200).json(await turnsService.deleteTurnService(Number(id)));
    } catch (error) {
      res.status(500).json({ message: "error.message deleteTurnController" });
    }
  },
};
