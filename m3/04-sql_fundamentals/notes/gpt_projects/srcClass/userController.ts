import { Request, Response } from "express";
import { UserService } from "./userService";

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  // Controlador para obtener todos los usuarios
  getUsers(req: Request, res: Response): void {
    const users = this.userService.getUsers();
    res.status(200).json(users);
  }

  // Controlador para obtener un usuario por ID
  getUserById(req: Request, res: Response): void {
    const userId = parseInt(req.params.id);
    const user = this.userService.getUserById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Usuario no encontrado." });
    }
  }

  // Controlador para registrar un nuevo usuario
  registerUser(req: Request, res: Response): void {
    const { name, email, birthdate, nDni, username, password } = req.body;
    this.userService.createUser(name, email, new Date(birthdate), nDni, username, password);
    res.status(201).json({ message: "Usuario creado exitosamente." });
  }
}
