// import node_modules
import { RequestHandler } from "express"
import { ThisError } from "shared-items"

// import others
import {
  PostGalleryImagesRequestBody,
  PostGalleryImagesResponse,
} from "@@/shared/types/api/v1/galleryImages"

// main
type PostController = RequestHandler<
  never,
  PostGalleryImagesResponse,
  PostGalleryImagesRequestBody
>
export const postController: PostController = async (req, res, next) => {
  const { body } = req
  // TODO: 仮
  // eslint-disable-next-line no-console
  console.log(body)

  try {
    res.status(201).send({ data: { result: "success" } })
  } catch (error) {
    const thisError = new ThisError({ error })
    next(thisError)
  }
}
