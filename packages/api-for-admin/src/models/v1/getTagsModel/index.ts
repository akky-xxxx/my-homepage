// import
import { GetTagsResponse } from "@@/shared/types/api/v1/tags"
import { ThisError } from "@@/shared/utils/ThisError"
import { createLogger } from "@@/shared/utils/createLogger"
import { dataStore } from "@@/shared/utils/gcp"
import { DataStore } from "@@/shared/const/DataStore"

// main
const {
  TYPES: { TAGS },
} = DataStore
const logger = createLogger(__filename)

type GetTagsModel = () => Promise<GetTagsResponse>
export const getTagsModel: GetTagsModel = async () => {
  logger.info("start")
  const query = dataStore.createQuery(TAGS)

  try {
    const [tags] = await dataStore.runQuery(query)
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
