import * as Joi from 'joi';

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

export const validationSchema = Joi.object({
  app: Joi.object({
    port: Joi.number().default(3000),
    logLevel: Joi.string().valid('debug', 'info', 'warn', 'error'),
  }),
  database: Joi.object({
    url: Joi.string().required(),
    name: Joi.string().default('catalogue'),
  }),
});
