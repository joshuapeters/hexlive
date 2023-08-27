import express, { Request, Response } from 'express';

export const helloRouter = express.Router();

helloRouter.get('/', async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'howdy!',
  });
});
