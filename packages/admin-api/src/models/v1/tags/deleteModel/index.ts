// import node_modules
import { Request } from "express"
import { ThisError, createErrorData } from "shared-items"

// import others
import {
  DeleteTagsQuery,
  DeleteTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { Server } from "@@/shared/const/Server"
import { isDeleteTagsQuery } from "@@/models/v1/tags/deleteModel/modules/isDeleteTagsQuery"
import { DataStore } from "@@/shared/const/DataStore"
import { dataStore } from "@@/shared/utils/gcp"

// main
const {
  TYPES: { TAGS },
} = DataStore
const { SUCCESS_RESPONSE } = Server
type DeleteModel = (
  query: Request<DeleteTagsQuery>["query"],
) => Promise<DeleteTagsResponse>

export const deleteModel: DeleteModel = async (query) => {
  if (!isDeleteTagsQuery(query)) {
    const error = new ThisError({ ...createErrorData(__filename, 400) })
    return Promise.reject(error)
  }

  const { tagIds } = query
  const arrayIds = typeof tagIds === "string" ? [tagIds] : tagIds

  const keys = arrayIds.map((tagId) => dataStore.key([TAGS, tagId]))

  try {
    await dataStore.delete(keys)
    return Promise.resolve(SUCCESS_RESPONSE)
  } catch (error) {
    const thisError = new ThisError({ error })
    return Promise.reject(thisError)
  }
}
