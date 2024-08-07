import { Request, Response } from "express";

import { createVehicleService, getVehiclesService } from "../services/vehiclesService";

export const getVehicles = async (req: Request, res: Response) => {
  const vehicles = await getVehiclesService();
  res.status(200).json(vehicles);
};

export const createVehicle = async (req: Request, res: Response) => {
  const { brand, color, model, year, userId } = req.body;
  try {
    const newVehicle = await createVehicleService({ brand, color, model, year, userId });
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
