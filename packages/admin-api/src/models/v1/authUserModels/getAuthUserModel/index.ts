// import node_modules
import { Request } from "express"
import { ThisError, createErrorData } from "shared-items"

// import others
import { createLogger } from "@@/shared/utils/createLogger"
import { isGoogleId } from "./modules/isGoogleId"
import { isSessionId } from "./modules/isSessionId"
import { checkByGoogleId } from "./modules/checkByGoogleId"
import { checkBySessionId } from "./modules/checkBySessionId"

// main
const logger = createLogger(__filename)
type GetAuthUserModel = (query: Request["query"]) => Promise<string>
export const getAuthUserModel: GetAuthUserModel = async (query) => {
  logger.info("start")
  logger.debug(query)
  const { googleId, sessionId } = query

  try {
    if (isGoogleId(googleId)) {
      const newSessionId = await checkByGoogleId(googleId)
      return Promise.resolve(newSessionId)
    }

    if (isSessionId(sessionId)) {
      await checkBySessionId(sessionId)
      return Promise.resolve(sessionId)
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
