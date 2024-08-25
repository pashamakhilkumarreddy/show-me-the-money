import pino from 'pino';
import { pinoHttp } from 'pino-http';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  formatters: {
    level: (label: string) => ({ level: label }),
    log: (object: any) => ({ ...object }),
  },
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

export const httpLogger = pinoHttp({
  logger,
  serializers: {
    req: (req) => ({
      id: req.id,
      method: req.method,
      url: req.url,
    }),
    res: (res) => ({
      statusCode: res.statusCode,
    }),
  },
});

export default logger;