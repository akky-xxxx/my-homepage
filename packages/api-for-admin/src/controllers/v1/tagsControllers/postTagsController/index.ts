// import node_modules
import { RequestHandler } from "express"

// import others
import {
  PostTagsRequestBody,
  PostTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { ThisError } from "@@/shared/utils/ThisError"
import { postTagsModel } from "@@/models/v1/postTagsModel"

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
