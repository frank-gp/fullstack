import { Request, Response } from "express";
import { getAllUsersService, getUserByIdService, createUserService, loginUserService } from "../services/usersService";
import { validateCredentialService, getAllCredentialsService } from "../services/credentialsSevice";

const getAllUsersController = async (req: Request, res: Response) => {
  res.json(await getAllUsersService());
};

const getUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const foundUserId = await getUserByIdService(Number(id));
  if (!foundUserId) {
    res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(foundUserId);
};

const registerUserController = async (req: Request, res: Response) => {
  const { name, email, birthdate, nDni, password } = req.body;

  const newUser = await createUserService({ name, email, birthdate, nDni, password });
  if (!newUser) {
    res.status(404).json({ message: "User not created" });
  }
  res.status(201).json(newUser);
};

const loginUserController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const credentialsID = await loginUserService({ username, password });
  if (!credentialsID) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ message: "Login successful", credentialsID, username });
};

const getAllCredentialsController = async (req: Request, res: Response) => {
  try {
    const credentials = getAllCredentialsService();
    res.json(credentials);
  } catch (error) {
    res.status(500).json({ message: "error.message" });
  }
};

export default {
  getAllUsersController,
  getUserByIdController,
  registerUserController,
  loginUserController,
  getAllCredentialsController,
};
