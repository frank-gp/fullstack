import { Request, Response } from "express";

export const getUsersController = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get All Users" });
};

export const getUserByIdController = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get User by Id" });
};

export const createUserController = async (req: Request, res: Response) => {
  res.status(201).json({ message: "Create User Success" });
};

export const loginUserController = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Login User Success" });
};
