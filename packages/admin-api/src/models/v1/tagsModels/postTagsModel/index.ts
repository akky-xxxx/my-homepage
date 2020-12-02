// import node_modules
import { Request } from "express"

// import shared/utils
import { ThisError } from "@@/shared/utils/ThisError"
import { createErrorData } from "@@/shared/utils/createErrorData"
import { createLogger } from "@@/shared/utils/createLogger"

// import shared/const
import { Server } from "@@/shared/const/Server"
import { dataStore } from "@@/shared/utils/gcp"

// import others
import {
  PostTagsRequestBody,
  PostTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { getInsertData } from "@@/models/v1/tagsModels/postTagsModel/modules/getInsertData"

// main
const logger = createLogger(__filename)
const { SUCCESS_RESPONSE } = Server
type PostTagsModel = (
  body: Request<PostTagsRequestBody>["body"],
) => Promise<PostTagsResponse>
export const postTagsModel: PostTagsModel = async (body) => {
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

  try {
    await dataStore.insert(registerTagNames.map(getInsertData))
    logger.info("success")
    return Promise.resolve(SUCCESS_RESPONSE)
  } catch (error) {
    const thisError = new ThisError({ error })
    logger.error("failure")
    return Promise.reject(thisError)
  }
}
