// import node_modules
import { RequestHandler } from "express"

// import others
import {
  PutTagsRequestBody,
  PutTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { putTagsModel } from "@@/models/v1/tagsModels/putTagsModel"

// main
type PutTagsController = RequestHandler<
  never,
  PutTagsResponse,
  PutTagsRequestBody
>
export const putTagsController: PutTagsController = async (req, res, next) => {
  try {
    const result = await putTagsModel(req.body)
    res.status(200).send(result)
  } catch (error) {
    next(error)
  }
}
