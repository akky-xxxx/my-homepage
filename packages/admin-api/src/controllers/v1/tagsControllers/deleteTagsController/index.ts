// import node_modules
import { RequestHandler } from "express"

// import others
import {
  DeleteTagsQuery,
  DeleteTagsResponse,
} from "@@/shared/types/api/v1/tags"
import { deleteModel } from "@@/models/v1/tags/deleteModel"

// main
type DeleteTagsController = RequestHandler<
  never,
  DeleteTagsResponse,
  never,
  DeleteTagsQuery
>
export const deleteTagsController: DeleteTagsController = async (
  req,
  res,
  next,
) => {
  try {
    const result = await deleteModel(req.query)
    res.status(200).send(result)
  } catch (error) {
    next(error)
  }
}
