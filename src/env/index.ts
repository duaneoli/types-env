import { Logger } from '@duaneoli/logger'
import * as Joi from 'types-joi'

function createEnvironment<T>(environmentSchema: Joi.ObjectSchema<T>): NonNullable<T> {
  const env: any = Joi.object(environmentSchema as any)
  if (!env || !env['_ids'] || !env['_ids']['_byKey']) {
    Logger.error('EnvironmentSchema not defined')
    process.exit(1)
  }

  const processEnv = [...env['_ids']['_byKey']].reduce((acc, it) => {
    acc[it[0]] = process.env[it[0]]
    return acc
  }, {})
  const envs: T = Joi.attempt(processEnv, env)
  return envs as NonNullable<typeof envs>
}

export default createEnvironment
