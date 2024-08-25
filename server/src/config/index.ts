import dotenv from 'dotenv';
dotenv.config();

const config = {
  server: {
    NODE_ENV: process.env.NODE_ENV || 'production',
    APP_ENV: process.env.APP_ENV || 'production',
    HOST: process.env.HOST || 'localhost',
    PORT: parseInt(process.env.PORT || '5000')
  },
  XERO_BASE_URL: process.env.XERO_BASE_URL,
};

export default config;
