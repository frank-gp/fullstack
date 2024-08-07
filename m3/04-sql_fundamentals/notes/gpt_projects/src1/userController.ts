import { Request, Response } from 'express';
import { getUsers, getUserById, createUser } from './userService';

function getUsersHandler(req: Request, res: Response): void {
  const users = getUsers();
  res.status(200).json(users);
}

function getUserByIdHandler(req: Request, res: Response): void {
  const userId = parseInt(req.params.id);
  const user = getUserById(userId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado.' });
  }
}

function registerUserHandler(req: Request, res: Response): void {
  const { name, email, birthdate, nDni, username, password } = req.body;
  createUser(name, email, new Date(birthdate), nDni, username, password);
  res.status(201).json({ message: 'Usuario creado exitosamente.' });
}

export { getUsersHandler as getUsers, getUserByIdHandler as getUserById, registerUserHandler as registerUser };
