// import node_modules
import { RequestHandler } from "express"

// import others
import {
  PostTagsRequestBody,
  PostTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { ThisError } from "@@/shared/utils/ThisError"
import { createErrorData } from "@@/shared/utils/createErrorData"
import { Server } from "@@/shared/const/Server"

// main
const { SUCCESS_RESPONSE } = Server
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

  if (!body.tagName) {
    const error = new ThisError({
      ...createErrorData(__filename, 400),
    })
    next(error)
    return
  }

  try {
    res.status(201).send(SUCCESS_RESPONSE)
  } catch (error) {
    const thisError = new ThisError({ error })
    next(thisError)
  }
}
