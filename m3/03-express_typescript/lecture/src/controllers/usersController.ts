import { Request, Response } from "express";
import { createUserService, getUsersService, deleteUserService } from "../services/usersService";
import IUser from "../intefaces/IUser";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, active, age } = req.body;
  const newUser: IUser = await createUserService({ name, email, active, age });
  res.status(201).json(newUser);
};

export const getUsers = async (req: Request, res: Response) => {
  const users: IUser[] = await getUsersService();
  res.status(200).json(users);
};

export const deleteUser = async (req: Request, res: Response) => {
  // const { id } = req.params;
  const { id } = req.body;
  // await deleteUserService(Number(id));
  await deleteUserService(id);
  // res.status(204).json({ message: "User deleted" });
  res.status(200).json({ message: "User deleted" });
};
