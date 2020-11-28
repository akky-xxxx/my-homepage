// import node_modules
import { Request } from "express"

// import others
import {
  PostTagsRequestBody,
  PostTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { ThisError } from "@@/shared/utils/ThisError"
import { createErrorData } from "@@/shared/utils/createErrorData"
import { Server } from "@@/shared/const/Server"

// main
const { SUCCESS_RESPONSE } = Server
type PostTagsModel = (
  body: Request<PostTagsRequestBody>["body"],
) => Promise<PostTagsResponse>
export const postTagsModel: PostTagsModel = async (body) => {
  if (!body.tagNames) {
    const error = new ThisError({
      ...createErrorData(__filename, 400),
    })

    return Promise.reject(error)
  }

  try {
    return Promise.resolve(SUCCESS_RESPONSE)
  } catch (error) {
    const thisError = new ThisError({ error })
    return Promise.reject(thisError)
  }
}
