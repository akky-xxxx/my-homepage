// import node_modules
import { RequestHandler } from "express"
import { ThisError } from "shared-items"

// import model
import { getTagsModel } from "@@/models/v1/tagsModels/getTagsModel"

// main
export const getTagsController: RequestHandler = async (_req, res, next) => {
  try {
    const responseData = await getTagsModel()
    res.status(200).send(responseData)
  } catch (error) {
    const thisError = new ThisError({ error })
    next(thisError)
  }
}
