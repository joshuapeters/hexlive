import express from 'express';
import { helloRouter } from './hello/hello.router';
export const apiRouter = express.Router();

apiRouter.use('/hello', helloRouter);
