import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.info(
      `Estas ejecutando un metodo ${req.method} en el metodo ${req.url}`,
    );
    next();
  }
}

export function loggerGlobal(req: Request, res: Response, next: NextFunction) {
  console.info(
    `Estas ejecutando un metodo ${req.method} en el metodo ${req.url}`,
  );
  next();
}
