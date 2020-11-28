// import node_modules
import { RequestHandler } from "express"

// import model
import { getTagsModel } from "@@/models/v1/tagsModels/getTagsModel"

// import others
import { ThisError } from "@@/shared/utils/ThisError"
import { createLogger } from "@@/shared/utils/createLogger"

// main
const logger = createLogger(__filename)
export const getTagsController: RequestHandler = async (_req, res, next) => {
  logger.info("start")
  try {
    const responseData = await getTagsModel()
    logger.info("success")
    res.status(200).send(responseData)
  } catch (error) {
    const thisError = new ThisError({ error })
    logger.error("failure")
    next(thisError)
  }
}
