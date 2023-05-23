import * as Joi from 'types-joi'

const redisEnvironmentSchema = {
  REDIS_HOST: Joi.string().required(),
  REDIS_PASSWORD: Joi.string().allow('').required(),
  REDIS_PORT: Joi.number().required(),
}

export default redisEnvironmentSchema
