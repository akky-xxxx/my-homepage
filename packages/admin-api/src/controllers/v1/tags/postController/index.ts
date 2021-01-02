// import node_modules
import { RequestHandler } from "express"
import { ThisError } from "shared-items"

// import others
import {
  PostTagsRequestBody,
  PostTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { postModel } from "@@/models/v1/tags/postModel"

// main
type PostController = RequestHandler<
  never,
  PostTagsResponse,
  PostTagsRequestBody
>
export const postController: PostController = async (req, res, next) => {
  const { body } = req

  try {
    const result = await postModel(body)
    res.status(201).send(result)
  } catch (error) {
    const thisError = new ThisError({ error })
    next(thisError)
  }
}
