import { Request, Response, NextFunction } from "express";

type ControllerFunction = (req: Request, res: Response) => Promise<any>;

const catchAsync = (controller: ControllerFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    controller(req, res).catch((err: Error) => next(err));
  };
};

export default catchAsync;
