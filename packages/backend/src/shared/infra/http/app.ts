import 'reflect-metadata';
import 'express-async-errors';

import '@shared/container';
import handleError from '@shared/infra/http/middlewares/handleError';

import cors from 'cors';
import express from 'express';

import routes from './routes';

const app = express();

app.use(
  cors({
    origin: '*'
  })
);

app.use(express.json());

app.use(routes);

app.use(handleError);

export default app;
