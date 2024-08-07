interface IUserDto {
    name: string;
  }
  
  interface IUser {
    id: number;
    name: string;
  }
  
  let usersDataBase: IUser[] = [
    {
      id: 1,
      name: "John",
    },
  ];
  
  // ========== services ==========
  const getUserServ = async () => {
    return usersDataBase;
  };
  
  const createUserSev = async (reqBodyObject: IUserDto): Promise<IUser> => {
    const newObject = {
      id: usersDataBase.length + 1,
      name: reqBodyObject.name,
    };
    usersDataBase.push(newObject);
    return newObject;
  };
  
  // ========== Controllers ==========
  import { Request, Response } from "express";
  
  const getUserCont = async (req: Request, res: Response) => {
    res.json(await getUserServ());
  };
  
  const creatteUserCont = async (req: Request, res: Response) => {
    const { name } = req.body;
    const responseServ = await createUserSev({ name });
    res.status(201).json(responseServ);
  };
  
  // ========== userRouter ==========
  import { Router } from "express";
  
  const userRouter = Router();
  
  userRouter.get("/", getUserCont);
  userRouter.post("/", creatteUserCont);
  
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
  