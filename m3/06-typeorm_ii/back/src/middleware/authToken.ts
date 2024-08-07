import { NextFunction, Request, Response } from "express";

const authToken = (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.headers;
  console.log(req.headers)
  console.log(token)
  // next();
  if (token === "autenticado") next();
  else res.status(400).json({ message: "Error. Falta autenticación" });
};

export default authToken;
