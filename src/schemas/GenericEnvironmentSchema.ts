import * as Joi from 'types-joi'

const genericEnvironmentSchema = {
  PORT: Joi.number().required().default(3000),
  JWT_SECRET: Joi.string().required(),
  ALLOW_ALL_ORIGINS_ON_CORS: Joi.boolean().default(false),
}

export default genericEnvironmentSchema
