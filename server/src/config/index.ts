import dotenv from 'dotenv';
dotenv.config();

interface ServerConfig {
  NODE_ENV: string;
  APP_ENV: string;
  HOST?: string;
  PORT: number;
}

interface Config {
  server: ServerConfig;
  XERO_BASE_URL?: string;
}

const config: Config = {
  server: {
    NODE_ENV: process.env.NODE_ENV || 'production',
    APP_ENV: process.env.APP_ENV || 'production',
    PORT: parseInt(process.env.PORT || '5000', 10)
  },
  XERO_BASE_URL: process.env.XERO_BASE_URL
};

export default config;
