// import node_modules
import { ThisError } from "shared-items"

// import
import { GetPrefecturesResponse } from "@@/shared/types/api/v1/prefectures"
import { createLogger } from "@@/shared/utils/createLogger"
import { DataStore } from "@@/shared/const/DataStore"
import { dataStore } from "@@/shared/utils/gcp"

// main
const logger = createLogger(__filename)
const {
  TYPES: { PREFECTURES },
} = DataStore

type Prefectures = () => Promise<GetPrefecturesResponse>
export const prefectures: Prefectures = async () => {
  logger.info("start")

  const query = dataStore.createQuery(PREFECTURES)
  query.order("prefectureCode")

  try {
    const [entities] = await dataStore.runQuery(query)
    const data = { prefectures: entities }

    logger.info("success")
    return Promise.resolve({ data })
  } catch (error) {
    const thisError = new ThisError({ error })

    logger.error("failure")
    return Promise.reject(thisError)
  }
}
