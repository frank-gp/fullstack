import { Request, Response } from "express";
import usersService from "../services/usersService";
import { getAllCredentialsService } from "../services/credentialsSevice";

export default {
  getAllUsersController: async (req: Request, res: Response) => {
    try {
      res.json(await usersService.getAllUsersService());
    } catch (error) {
      res.status(500).json({ message: "error getAllUsersController" });
    }
  },

  getUserByIdController: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const foundUserId = await usersService.getUserByIdService(Number(id));
      res.status(200).json(foundUserId);
    } catch (error) {
      res.status(500).json({ message: "error getUserByIdController" });
    }
  },

  registerUserController: async (req: Request, res: Response) => {
    try {
      const { name, username, email, birthdate, nDni, password } = req.body;

      const newUser = await usersService.createUserService({ name, username, email, birthdate, nDni, password });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "error registerUserController" });
    }
  },

  loginUserController: async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const returnLoginSevice = await usersService.loginUserService({ username, password });
      // res.status(200).json({ login: true, user: returnLoginSevice });
      res.status(200).json({ login: true });
    } catch (error) {
      res.status(500).json({ login: false, message: "error loginUserController" });
    }
  },

  deleteUserByIdController: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedUserId = await usersService.deleteUserByIdService(Number(id));

      res.status(200).json(deletedUserId);
    } catch (error) {
      res.status(500).json({ message: "error deleteUserByIdController" });
    }
  },

  // ========== temporal ==========
  getAllCredentialsController: async (req: Request, res: Response) => {
    try {
      const credentials = await getAllCredentialsService();
      res.json(credentials);
    } catch (error) {
      res.status(500).json({ message: "error getAllCredentialsController" });
    }
  },
};
