// import node_modules
import { RequestHandler } from "express"
import { ThisError } from "shared-items"

// import others
import {
  GetGalleryImagesResponse,
  GetGalleryImage,
} from "@@/shared/types/api/v1/galleryImages"

// main
type PostGalleryImagesController = RequestHandler<
  never,
  GetGalleryImagesResponse
>
export const get: PostGalleryImagesController = async (_req, res, next) => {
  try {
    const data = {
      images: [] as GetGalleryImage[],
    }
    res.status(200).send({ data })
  } catch (error) {
    const thisError = new ThisError({ error })
    next(thisError)
  }
}
