/* eslint-disable no-console */
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as dotenv from 'dotenv';
import { apiRouter } from './api/routes';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// routing
app.use('/api', apiRouter);

// default error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).render('error', { error: err });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
