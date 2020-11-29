// import node_modules
import { Request } from "express"

// import others
import {
  PutTagsRequestBody,
  PutTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { ThisError } from "@@/shared/utils/ThisError"
import { createErrorData } from "@@/shared/utils/createErrorData"
import { isPutTagsRequestBody } from "@@/models/v1/tagsModels/putTagsModel/modules/isPutTagsRequestBody"
import { Server } from "@@/shared/const/Server"

// main
const { SUCCESS_RESPONSE } = Server
const error400 = new ThisError({ ...createErrorData(__filename, 400) })

type PutTagsModel = (
  body: Request<PutTagsRequestBody>["body"],
) => Promise<PutTagsResponse>
export const putTagsModel: PutTagsModel = async (body) => {
  if (!isPutTagsRequestBody(body)) {
    return Promise.reject(error400)
  }

  try {
    return Promise.resolve(SUCCESS_RESPONSE)
  } catch (error) {
    const thisError = new ThisError({ error })
    return Promise.reject(thisError)
  }
}
