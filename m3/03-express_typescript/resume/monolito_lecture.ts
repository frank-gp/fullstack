// ========== src/cofig/envs.ts ==========
interface UserDto {
  name: string;
  email: string;
  active: boolean;
}

// ========== src/intefaces/IUser.ts ==========
interface IUser {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

// ========== src/services/usersService.ts ==========
let users: IUser[] = [
  //
  { id: 1, name: "Frank", email: "user@mail.com", active: true },
];

let id: number = 1;

const createUserService = async (userData: UserDto): Promise<IUser> => {
  const newUser = {
    id,
    name: userData.name,
    email: userData.email,
    active: userData.active,
  };
  users.push(newUser);
  id++;
  return newUser;
};

const getUsersService = async (): Promise<IUser[]> => {
  return users;
};

const deleteUserService = async (id: number): Promise<void> => {
  users = users.filter((user: IUser) => user.id !== id);
};

// ========== src/controllers/usersController.ts ==========
import { Request, Response } from "express";
// import IUser from "../intefaces/IUser";

const createUserController = async (req: Request, res: Response) => {
  const { name, email, active } = req.body;
  const newUser: IUser = await createUserService({ name, email, active });
  res.status(201).json(newUser);
};

const getUsersController = async (req: Request, res: Response) => {
  const users: IUser[] = await getUsersService();
  res.status(200).json(users);
};

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteUserService(Number(id));
  res.status(200).json({ message: "User deleted" });
};

// ========== src/middlewares/auth.ts ==========
import { NextFunction } from "express";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;
  if (token === "autenticado") next();
  else res.status(400).json({ message: "Error. Falta autenticación" });
};

// ========== src/routes/index.ts ==========
import { Router } from "express";

const router: Router = Router();

router.post("/users", createUserController);

router.get("/users", auth, getUsersController);

router.delete("/users/:id", deleteUserController);

// ========== src/server.ts ==========
import express from "express";

const server = express();

server.use(express.json());
server.use(router);

// ========== src/cofig/envs.ts ==========
import "dotenv/config";

const PORT = process.env.PORT || 3000;

// ========== src/index.ts ==========

server.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
