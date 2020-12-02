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
import { isDeleteTagsQuery } from "@@/models/v1/tagsModels/deleteTagsModel/modules/isDeleteTagsQuery"
import { DataStore } from "@@/shared/const/DataStore"
import { dataStore } from "@@/shared/utils/gcp"

// main
const {
  TYPES: { TAGS },
} = DataStore
const { SUCCESS_RESPONSE } = Server
type DeleteTagsModel = (
  query: Request<DeleteTagsQuery>["query"],
) => Promise<DeleteTagsResponse>

export const deleteTagsModel: DeleteTagsModel = async (query) => {
  if (!isDeleteTagsQuery(query)) {
    const error = new ThisError({ ...createErrorData(__filename, 400) })
    return Promise.reject(error)
  }

  const { tagIds } = query

  const keys = tagIds.map((tagId) => dataStore.key([TAGS, tagId]))

  try {
    await dataStore.delete(keys)
    return Promise.resolve(SUCCESS_RESPONSE)
  } catch (error) {
    const thisError = new ThisError({ error })
    return Promise.reject(thisError)
  }
}
