import { Request, Response } from "express";
import turnsService from "../services/turnsService";
import catchAsync from "../utils/catchAsync";

const getAllTurnsController = async (req: Request, res: Response) => {
  res.json(await turnsService.getAllTurnsService());
};

const getTurnByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json(await turnsService.getTurnByIdService(Number(id)));
};

const createTurnController = async (req: Request, res: Response) => {
  const { date, time, userId } = req.body;
  res.status(201).json(await turnsService.createTurnsService({ date, time, userId }));
};

const cancelTurnController = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json(await turnsService.cancelTurnService(Number(id)));
};

const deleteTurnController = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json(await turnsService.deleteTurnService(Number(id)));
};

export default {
  getAllTurnsController: catchAsync(getAllTurnsController),
  getTurnByIdController: catchAsync(getTurnByIdController),
  createTurnController: catchAsync(createTurnController),
  cancelTurnController: catchAsync(cancelTurnController),
  deleteTurnController: catchAsync(deleteTurnController),
};
