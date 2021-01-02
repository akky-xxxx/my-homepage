// import node_modules
import { RequestHandler } from "express"

// import others
import {
  PutTagsRequestBody,
  PutTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { putModel } from "@@/models/v1/tags/putModel"

// main
type PutController = RequestHandler<never, PutTagsResponse, PutTagsRequestBody>
export const putController: PutController = async (req, res, next) => {
  try {
    const result = await putModel(req.body)
    res.status(200).send(result)
  } catch (error) {
    next(error)
  }
}
