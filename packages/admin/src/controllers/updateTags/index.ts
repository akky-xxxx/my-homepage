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

const apiHandlerCallback: ApiHandlerCallback = async () => {
  logger.info("start")
  try {
    await adminApiClient.put(TAGS)
    logger.info("success")
    return Promise.resolve()
  } catch (error) {
    const thisError = new ThisError({ error })
    logger.info("failure")
    return Promise.reject(thisError)
  }
}

export const updateTags = apiHandler(apiHandlerCallback)
