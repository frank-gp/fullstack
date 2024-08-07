import { Request, Response } from "express";
import turnsService from "../services/turnsService";
// import { getAllTurnsService, getTurnByIdService, createTurnsService, cancelTurnService } from "../services/turnsService";

export const getAllTurnsController = async (req: Request, res: Response) => {
  res.json(await turnsService.getAllTurnsService());
  // res.json(await getAllTurnsService());
};

export const getTurnByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json(await turnsService.getTurnByIdService(Number(id)));
};

export const createTurnController = async (req: Request, res: Response) => {
  try {
    const { date, time, userId } = req.body;
    console.log(req.body)
    res.status(201).json(await turnsService.createTurnsService({ date, time, userId }));
  } catch (error) {
    res.status(500).json({ message: "error.message" });
  }
};

export const cancelTurnController = async (req: Request, res: Response) => {
  // const id = parseInt(req.body.id);
  const { id } = req.params;
  res.status(200).json(await turnsService.cancelTurnService(Number(id)));
};
