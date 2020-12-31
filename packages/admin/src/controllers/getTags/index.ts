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
    // TODO: 型を付ける
    const { data: { data } } = await adminApiClient.get(TAGS)
    logger.debug(data)
    logger.info("success")
    return Promise.resolve(data)
  } catch (error) {
    const thisError = new ThisError({ error })
    logger.info("failure")
    return Promise.reject(thisError)
  }
}

export const getTags = apiHandler(apiHandlerCallback)
