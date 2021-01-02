// import node_modules
import { ThisError } from "shared-items"

// import others
import { createLogger } from "@@/shared/utils/createLogger"
import { GetGalleryImagesResponse } from "@@/shared/types/api/v1/galleryImages"
import { DataStore } from "@@/shared/const/DataStore"
import { dataStore } from "@@/shared/utils/gcp"
import { dataStore2response } from "./modules/dataStore2response"

// main
const logger = createLogger(__filename)
const {
  TYPES: { GALLERY_IMAGES },
} = DataStore

type GetModel = () => Promise<GetGalleryImagesResponse>
export const getModel: GetModel = async () => {
  logger.info("start")

  const query = dataStore.createQuery(GALLERY_IMAGES)
  query.order("createdAt", { descending: true })

  try {
    const [entities] = await dataStore.runQuery(query)
    const images = entities.map(dataStore2response)
    const data = { images }

    logger.info("success")
    return Promise.resolve({ data })
  } catch (error) {
    const thisError = new ThisError({ error })
    logger.error("failure")

    return Promise.reject(thisError)
  }
}
