export const config = (() => {
  const env = process.env;

  return {
    NODE_ENV: env.NODE_ENV || 'dev',

    MONGODB_HOST: env.MONGODB_HOST || 'mongodb://127.0.0.1:27017/scrapper-api',
    MONGODB_PASS: env.MONGODB_PASS,
    MONGODB_CONNECTION_NAME: env.MONGODB_CONNECTION_NAME || 'scrapper-api-main-connection'
  }
})()