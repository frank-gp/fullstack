interface IUserDto {
    name: string;
  }
  
  interface IUser {
    id: number;
    name: string;
  }
  
  let users: IUser[] = [
    {
      id: 1,
      name: "John",
    },
  ];
  
  // ========== services ==========
  const getUserServ = async () => {
    return users;
  };
  
  // ========== Controllers ==========
  import { Request, Response } from "express";
  const getUserCont = async (req: Request, res: Response) => {
    res.json(await getUserServ());
  };
  
  // ========== userRouter ==========
  import { Router } from "express";
  
  const userRouter = Router();
  
  userRouter.get("/", getUserCont);
  
  // ========== indexRouter ==========
  const indexRouter = Router();
  
  indexRouter.use("/users", userRouter);
  
  // ========== server ==========
  import express from "express";
  
  const server = express();
  
  server.use(express.json());
  server.use(indexRouter);
  
  // ========== index ==========
  import "dotenv/config";
  
  const PORT = process.env.PORT;
  server.listen(PORT, () => {
    console.log("server started on port", PORT);
  });
  