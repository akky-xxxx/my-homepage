// import node_modules
import { RequestHandler } from "express"
import { ThisError } from "shared-items"

// import model
import { getModel } from "@@/models/v1/tags/getModel"

// main
export const getController: RequestHandler = async (_req, res, next) => {
  try {
    const responseData = await getModel()
    res.status(200).send(responseData)
  } catch (error) {
    const thisError = new ThisError({ error })
    next(thisError)
  }
}
