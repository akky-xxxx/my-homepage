// import node_modules
import { Request } from "express"
import { ThisError, createErrorData } from "shared-items"

// import others
import { createLogger } from "@@/shared/utils/createLogger"
import { checkByGoogleId } from "./modules/checkByGoogleId"
import { checkBySessionId } from "./modules/checkBySessionId"

// main
const logger = createLogger(__filename)
type GetModel = (query: Request["query"]) => Promise<string>
export const getModel: GetModel = async (query) => {
  logger.info("start")
  logger.debug(query)
  const { googleId, sessionId } = query

  try {
    if (typeof googleId === "string") {
      const newSessionId = await checkByGoogleId(googleId)
      return Promise.resolve(newSessionId)
    }

    if (typeof sessionId === "string") {
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
