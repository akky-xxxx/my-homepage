// import node_modules
import { Request } from "express"
import { ThisError, createErrorData } from "shared-items"

// import others
import { dataStore } from "@@/shared/utils/gcp"
import { DataStore } from "@@/shared/const/DataStore"
import { createLogger } from "@@/shared/utils/createLogger"
import { isGoogleId } from "./modules/isGoogleId"

// main
const logger = createLogger(__filename)
const {
  TYPES: { PERMISSION_USERS },
} = DataStore
type GetAuthUserModel = (query: Request["query"]) => Promise<void>
export const getAuthUserModel: GetAuthUserModel = async (query) => {
  logger.info("start")
  logger.debug(query)
  const { googleId } = query

  if (!isGoogleId(googleId)) {
    const error = new ThisError(createErrorData(__filename, 400))
    logger.error("failure")
    return Promise.reject(error)
  }

  try {
    const permissionUserKey = dataStore.key([PERMISSION_USERS, googleId])
    const [permissionUser] = await dataStore.get(permissionUserKey)

    if (!permissionUser) {
      const error = new ThisError(createErrorData(__filename, 403))
      logger.error("failure")
      return Promise.reject(error)
    }

    logger.info("success")
    return Promise.resolve()
  } catch (error) {
    const thisError = new ThisError({
      filePath: __filename,
      error,
    })
    logger.error("failure")
    return Promise.reject(thisError)
  }
}
