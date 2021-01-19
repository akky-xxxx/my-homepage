// import node_modules
import { ThisError } from "shared-items"

// import
import { createLogger } from "@@/shared/utils/createLogger"
import { apiHandler, ApiHandlerCallback } from "@@/shared/utils/apiHandler"
import { adminApiClient } from "@@/shared/utils/adminApiClient"
import { Endpoints } from "@@/shared/const/Endpoints"

// main
const {
  API: { TAGS },
} = Endpoints
const logger = createLogger(__filename)

const apiHandlerCallback: ApiHandlerCallback = async (req) => {
  const { body } = req
  logger.info("start")
  logger.debug(body)
  try {
    await adminApiClient.post(TAGS, body)
    logger.info("success")
    return Promise.resolve()
  } catch (error) {
    const thisError = new ThisError({ error })
    logger.info("failure")
    return Promise.reject(thisError)
  }
}

export const addTags = apiHandler(apiHandlerCallback)
