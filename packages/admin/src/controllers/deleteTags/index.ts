// import node_modules
import { format } from "url"
import { ThisError, createErrorData } from "shared-items"

// import
import { createLogger } from "@@/shared/utils/createLogger"
import { apiHandler, ApiHandlerCallback } from "@@/shared/utils/apiHandler"
import { adminApiClient } from "@@/shared/utils/adminApiClient"
import { Endpoints } from "@@/shared/const/Endpoints"
import { formatTagsIds } from "./modules/formatTagsIds"

// main
const {
  API: { TAGS },
} = Endpoints
const logger = createLogger(__filename)

const apiHandlerCallback: ApiHandlerCallback = async (req) => {
  const { query } = req
  logger.info("start")
  const tagIds = formatTagsIds(query)

  if (!tagIds) {
    const thisError = new ThisError(createErrorData(__filename, 400))
    logger.info("failure")
    return Promise.reject(thisError)
  }

  const endpoint = `${TAGS}${format({ query: { tagIds } })}`
  try {
    await adminApiClient.delete(endpoint)
    logger.info("success")
    return Promise.resolve()
  } catch (error) {
    const thisError = new ThisError({ error })
    logger.info("failure")
    return Promise.reject(thisError)
  }
}

export const deleteTags = apiHandler(apiHandlerCallback)
