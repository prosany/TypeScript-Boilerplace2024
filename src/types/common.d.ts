export type Config = {
  PORT: number;
  NODE_ENV: string;
  MONGO_URI: string;
  MONGO_URI_TEST: string;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  COOKIE_EXPIRES_IN: number;
  JWT_COOKIE_HTTP_ONLY: boolean;
  JWT_COOKIE_SECURE: boolean;
  JWT_COOKIE_SAME_SITE: string;
  JWT_COOKIE_DOMAIN: string;
};
