// import node_modules
import { ThisError } from "shared-items"

// import others
import { createLogger } from "@@/shared/utils/createLogger"
import {
  GetGalleryImagesResponse,
  GetGalleryImage,
} from "@@/shared/types/api/v1/galleryImages"

// main
const logger = createLogger(__filename)

type GetModel = () => Promise<GetGalleryImagesResponse>
export const getModel: GetModel = async () => {
  logger.info("start")

  try {
    const images: GetGalleryImage[] = []
    const data = { images }

    logger.debug(data)
    logger.info("success")
    return Promise.resolve({ data })
  } catch (error) {
    const thisError = new ThisError({ error })
    logger.error("failure")

    return Promise.reject(thisError)
  }
}
