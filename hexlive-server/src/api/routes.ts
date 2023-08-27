import express from 'express';
import { helloRouter } from './hello/router';
export const apiRouter = express.Router();

apiRouter.use('/hello', helloRouter);
