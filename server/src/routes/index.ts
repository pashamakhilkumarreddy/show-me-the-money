import { Router } from 'express';
import reports from './reports';

const api = Router()
  .use(reports)

export default Router().use('/api/v1', api);