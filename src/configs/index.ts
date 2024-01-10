import 'dotenv';
import type { Config } from '@/types/common.d';

const config: Config = {
  PORT: parseInt(process.env.PORT as string, 10),
  NODE_ENV: process.env.NODE_ENV as string,
  MONGO_URI: process.env.MONGO_URI as string,
  MONGO_URI_TEST: process.env.MONGO_URI_TEST as string,
  JWT_SECRET: process.env.JWT_SECRET as string,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN as string,
  COOKIE_EXPIRES_IN: parseInt(process.env.COOKIE_EXPIRES_IN as string, 10),
  JWT_COOKIE_HTTP_ONLY: process.env.JWT_COOKIE_HTTP_ONLY === 'true',
  JWT_COOKIE_SECURE: process.env.JWT_COOKIE_SECURE === 'true',
  JWT_COOKIE_SAME_SITE: process.env.JWT_COOKIE_SAME_SITE as string,
  JWT_COOKIE_DOMAIN: process.env.JWT_COOKIE_DOMAIN as string,
};

export default config;
