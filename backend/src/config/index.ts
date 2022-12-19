const PORT = process.env.PORT || 4000;
const EMAIL_TOKEN_LIFETIME = process.env.EMAIL_TOKEN_LIFETIME! || '86400';
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY!;
const JWT_AUTH_LIFETIME = process.env.JWT_AUTH_LIFETIME! || '10d';
const JWT_AUTH_SECRET = process.env.JWT_AUTH_SECRET!;
const JWT_REFRESH_LIFETIME = process.env.JWT_REFRESH_LIFETIME! || '90d';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!;
const JWT_SERVICE_SECRET = process.env.JWT_SERVICE_SECRET!;
const JWT_SIGNUP_LIFETIME = process.env.JWT_SIGNUP_LIFETIME! || '15m';
const JWT_SIGNUP_SECRET = process.env.JWT_SIGNUP_SECRET!;
const MONGO_URL = process.env.MONGO_URL!;
const NODE_ENV = process.env.NODE_ENV! || 'production';
const CLIENT_SECRET_HEROKU = process.env.CLIENT_SECRET_HEROKU!;
const CLIENT_ID_HEROKU = process.env.CLIENT_ID_HEROKU!;
const CLIENT_ID_VERCEL = process.env.CLIENT_ID_VERCEL!;
const CLIENT_ID_NETLIFY = process.env.CLIENT_ID_NETLIFY!;
const CLIENT_ID_GITHUB =
  process.env.CLIENT_ID_GITHUB! || 'e787fc24bcec43ecd5d5';
const CLIENT_SECRET_VERCEL = process.env.CLIENT_SECRET_VERCEL!;
const CLIENT_SECRET_NETLIFY = process.env.CLIENT_SECRET_NETLIFY!;
const CLIENT_SECRET_GITHUB =
  process.env.CLIENT_SECRET_GITHUB! ||
  '407f32da788f63559abd662c6de08bb2911ca8ae';
const POSTHOG_HOST = process.env.POSTHOG_HOST! || 'https://app.posthog.com';
const POSTHOG_PROJECT_API_KEY =
  process.env.POSTHOG_PROJECT_API_KEY! ||
  'phc_nSin8j5q2zdhpFDI1ETmFNUIuTG4DwKVyIigrY10XiE';
const PRIVATE_KEY = process.env.PRIVATE_KEY!;
const PUBLIC_KEY = process.env.PUBLIC_KEY!;
const SENTRY_DSN = process.env.SENTRY_DSN!;
const SITE_URL = process.env.SITE_URL!;
const SMTP_HOST = process.env.SMTP_HOST! || 'smtp.gmail.com';
const SMTP_PORT = process.env.SMTP_PORT! || 587;
const SMTP_NAME = process.env.SMTP_NAME!;
const SMTP_USERNAME = process.env.SMTP_USERNAME!;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD!;
const STRIPE_PRODUCT_CARD_AUTH = process.env.STRIPE_PRODUCT_CARD_AUTH!;
const STRIPE_PRODUCT_PRO = process.env.STRIPE_PRODUCT_PRO!;
const STRIPE_PRODUCT_STARTER = process.env.STRIPE_PRODUCT_STARTER!;
const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY!;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY!;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET!;
const TELEMETRY_ENABLED = process.env.TELEMETRY_ENABLED! !== 'false' && true;

export {
  PORT,
  EMAIL_TOKEN_LIFETIME,
  ENCRYPTION_KEY,
  JWT_AUTH_LIFETIME,
  JWT_AUTH_SECRET,
  JWT_REFRESH_LIFETIME,
  JWT_REFRESH_SECRET,
  JWT_SERVICE_SECRET,
  JWT_SIGNUP_LIFETIME,
  JWT_SIGNUP_SECRET,
  MONGO_URL,
  NODE_ENV,
  CLIENT_ID_HEROKU,
  CLIENT_ID_VERCEL,
  CLIENT_ID_NETLIFY,
  CLIENT_ID_GITHUB,
  CLIENT_SECRET_HEROKU,
  CLIENT_SECRET_VERCEL,
  CLIENT_SECRET_NETLIFY,
  CLIENT_SECRET_GITHUB,
  POSTHOG_HOST,
  POSTHOG_PROJECT_API_KEY,
  PRIVATE_KEY,
  PUBLIC_KEY,
  SENTRY_DSN,
  SITE_URL,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_NAME,
  SMTP_USERNAME,
  SMTP_PASSWORD,
  STRIPE_PRODUCT_CARD_AUTH,
  STRIPE_PRODUCT_PRO,
  STRIPE_PRODUCT_STARTER,
  STRIPE_PUBLISHABLE_KEY,
  STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET,
  TELEMETRY_ENABLED
};
