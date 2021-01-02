// import node_modules
import { ThisError } from "shared-items"

// import others
import { GetTagsResponse } from "@@/shared/types/api/v1/tags"
import { createLogger } from "@@/shared/utils/createLogger"
import { dataStore } from "@@/shared/utils/gcp"
import { DataStore } from "@@/shared/const/DataStore"
import { formatTags } from "@@/models/v1/tags/getModel/modules/formatTags"

// main
const {
  TYPES: { TAGS },
} = DataStore
const logger = createLogger(__filename)

type GetModel = () => Promise<GetTagsResponse>
export const getModel: GetModel = async () => {
  logger.info("start")
  const query = dataStore.createQuery(TAGS)
  query.order("updatedAt", { descending: true })

  try {
    const [entities] = await dataStore.runQuery(query)
    const tags = entities.map(formatTags)

    const responseData: GetTagsResponse = {
      data: {
        tags,
      },
    }

    logger.info("success")
    return Promise.resolve(responseData)
  } catch (error) {
    const thisError = new ThisError({ error, filePath: __filename })
    logger.error("failure")
    return Promise.reject(thisError)
  }
}
