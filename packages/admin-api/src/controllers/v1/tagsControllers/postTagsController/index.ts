// import node_modules
import { RequestHandler } from "express"
import { ThisError } from "shared-items"

// import others
import {
  PostTagsRequestBody,
  PostTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { postTagsModel } from "@@/models/v1/tagsModels/postTagsModel"

// main
type PostTagsController = RequestHandler<
  never,
  PostTagsResponse,
  PostTagsRequestBody
>
export const postTagsController: PostTagsController = async (
  req,
  res,
  next,
) => {
  const { body } = req

  try {
    const result = await postTagsModel(body)
    res.status(201).send(result)
  } catch (error) {
    const thisError = new ThisError({ error })
    next(thisError)
  }
}