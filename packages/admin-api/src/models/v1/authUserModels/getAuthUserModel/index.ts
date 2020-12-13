// import node_modules
import { Request } from "express"
import { ThisError, createErrorData } from "shared-items"

// import others
import { createLogger } from "@@/shared/utils/createLogger"
import { isGoogleId } from "./modules/isGoogleId"
import { checkByGoogleId } from "@@/models/v1/authUserModels/getAuthUserModel/modules/checkByGoogleId"

// main
const logger = createLogger(__filename)
type GetAuthUserModel = (query: Request["query"]) => Promise<void>
export const getAuthUserModel: GetAuthUserModel = async (query) => {
  logger.info("start")
  logger.debug(query)
  const { googleId } = query

  try {
    if (isGoogleId(googleId)) {
      await checkByGoogleId(googleId)
      return Promise.resolve()
    }

    const error = new ThisError(createErrorData(__filename, 400))
    logger.error("failure")
    return Promise.reject(error)
  } catch (error) {
    const thisError = new ThisError({
      filePath: __filename,
      error,
    })
    logger.error("failure")
    return Promise.reject(thisError)
  }
}
