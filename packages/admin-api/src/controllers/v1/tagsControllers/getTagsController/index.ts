// import node_modules
import { RequestHandler } from "express"

// import model
import { getTagsModel } from "@@/models/v1/tagsModels/getTagsModel"

// import others
import { ThisError } from "@@/shared/utils/ThisError"

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
