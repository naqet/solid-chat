import express, { NextFunction, Request, Response } from 'express';
import errorHandler from '../middleware/errorHandler';

export default function createServer() {
  const app = express();

  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    errorHandler(err, res);
  });

  return app;
}
