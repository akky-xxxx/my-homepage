// import node_modules
import { RequestHandler } from "express"

// import others
import {
  PutTagsRequestBody,
  PuttTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { ThisError } from "@@/shared/utils/ThisError"
import { createErrorData } from "@@/shared/utils/createErrorData"

// main
type PutTagsController = RequestHandler<
  never,
  PuttTagsResponse,
  PutTagsRequestBody
>
export const putTagsController: PutTagsController = async (req, res, next) => {
  if (!req.body.tags) {
    const error = new ThisError({ ...createErrorData(__filename, 400) })
    next(error)
    return
  }

  const hasTagId = req.body.tags.some((tag) => {
    return tag.tagId
  })
  if (!hasTagId) {
    const error = new ThisError({ ...createErrorData(__filename, 400) })
    next(error)
    return
  }

  try {
    res.status(200).send({ data: { result: "success" } })
  } catch (error) {
    next(error)
  }
}
