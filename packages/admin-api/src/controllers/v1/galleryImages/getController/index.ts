// import node_modules
import { RequestHandler } from "express"
import { ThisError } from "shared-items"

// import model
import { getModel } from "@@/models/v1/galleryImages/getModel"

// import others
import { GetGalleryImagesResponse } from "@@/shared/types/api/v1/galleryImages"

// main
type GetController = RequestHandler<never, GetGalleryImagesResponse>
export const getController: GetController = async (_req, res, next) => {
  try {
    const responseData = await getModel()
    res.status(200).send(responseData)
  } catch (error) {
    const thisError = new ThisError({ error })
    next(thisError)
  }
}
