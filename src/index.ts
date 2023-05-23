import * as TypesJoi from 'types-joi'
import createEnvironment from './env'
import databaseEnvironmentSchema from './schemas/DatabaseEnvironmentSchema'
import genericEnvironmentSchema from './schemas/GenericEnvironmentSchema'
import redisEnvironmentSchema from './schemas/RedisEnvironmentSchema'

const CreateEnvironment = createEnvironment
const DefaultEnvironment = {
  database: databaseEnvironmentSchema,
  generic: genericEnvironmentSchema,
  redis: redisEnvironmentSchema,
}

export default {
  CreateEnvironment,
  DefaultEnvironment,
  TypesJoi,
}
