// import node_modules
import { Request } from "express"

// import others
import {
  DeleteTagsQuery,
  DeleteTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { Server } from "@@/shared/const/Server"
import { ThisError } from "@@/shared/utils/ThisError"
import { createErrorData } from "@@/shared/utils/createErrorData"

// main
const { SUCCESS_RESPONSE } = Server
type DeleteTagsModel = (
  query: Request<DeleteTagsQuery>["query"],
) => Promise<DeleteTagsResponse>

export const deleteTagsModel: DeleteTagsModel = async (query) => {
  if (!query.tagIds) {
    const error = new ThisError({ ...createErrorData(__filename, 400) })
    return Promise.reject(error)
  }

  try {
    return Promise.resolve(SUCCESS_RESPONSE)
  } catch (error) {
    const thisError = new ThisError({ error })
    return Promise.reject(thisError)
  }
}
