import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import config from './config';
import {httpLogger} from './utils/logger';

const app = express();

const {
  server: { PORT }
} = config;

app.use(httpLogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.get('/health-check', (req: express.Request, res: express.Response) => {
  res.status(200).json({ status: 'API is up and running!!!' });
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (err) {
      // @ts-ignore
      res.status(err.errorCode).json(err.message);
    } else if (err) {
      res.status(500).json(err);
    }
  }
);

app.listen(PORT, '0.0.0.0', () => {
  console.info(`Server is up and running on ${PORT}`);
});

export default app;