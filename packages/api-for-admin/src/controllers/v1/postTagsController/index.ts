// import node_modules
import { RequestHandler } from "express"

// import others
import {
  PostTagsRequestBody,
  PostTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { ThisError } from "@@/shared/utils/ThisError"

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

  if (!body.tagName) {
    const error = new ThisError({
      status: 400,
      message: "パラメータが不正です",
      filePath: __filename,
    })
    next(error)
    return
  }

  try {
    const responseData = {
      data: {
        result: "success",
      },
    } as const
    res.status(201).send(responseData)
  } catch (error) {
    const thisError = new ThisError({ error })
    next(thisError)
  }
}
