import * as Joi from 'joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string().uri().required(),
  DATABASE_NAME: Joi.string().required(),
  LOG_LEVEL: Joi.string()
    .valid('debug', 'info', 'warn', 'error')
    .default('debug'),
});
