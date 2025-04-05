export default () => ({
  app: {
    port: parseInt(process.env.PORT || '3000', 10),
    logLevel: process.env.LOG_LEVEL || 'debug',
  },
  database: {
    url: process.env.DATABASE_URL,
    name: process.env.DATABASE_NAME || 'catalogue',
  },
});
