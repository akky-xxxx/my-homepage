// import node_modules
import { Request } from "express"
import { ThisError, createErrorData } from "shared-items"

// import shared/utils
import { createLogger } from "@@/shared/utils/createLogger"

// import shared/const
import { Server } from "@@/shared/const/Server"
import { dataStore } from "@@/shared/utils/gcp"

// import others
import {
  PostTagsRequestBody,
  PostTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { getInsertData } from "@@/models/v1/tags/postModel/modules/getInsertData"

// main
const logger = createLogger(__filename)
const { SUCCESS_RESPONSE } = Server

type PostModel = (
  body: Request<PostTagsRequestBody>["body"],
) => Promise<PostTagsResponse>
export const postModel: PostModel = async (body) => {
  logger.info("start")
  if (!body.tagNames) {
    const error = new ThisError({
      ...createErrorData(__filename, 400),
    })

    logger.error("failure")
    return Promise.reject(error)
  }

  const registerTagNames =
    typeof body.tagNames === "string" ? [body.tagNames] : [...body.tagNames]
  logger.debug({ registerTagNames })

  const insertData = registerTagNames.filter(Boolean).map(getInsertData)
  if (!insertData.length) {
    const thisError = new ThisError(createErrorData(__filename, 400))
    logger.error("failure")
    return Promise.reject(thisError)
  }

  try {
    await dataStore.insert(insertData)
    logger.info("success")
    return Promise.resolve(SUCCESS_RESPONSE)
  } catch (error) {
    const thisError = new ThisError({ error })
    logger.error("failure")
    return Promise.reject(thisError)
  }
}
