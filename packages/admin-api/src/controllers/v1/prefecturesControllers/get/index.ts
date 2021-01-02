// import node_modules
import { RequestHandler } from "express"
import { ThisError } from "shared-items"

// import others
import { GetPrefecturesResponse } from "@@/shared/types/api/v1/prefectures"
import { getModel } from "@@/models/v1/prefectures/getModel"

// main
type GetPrefecturesController = RequestHandler<never, GetPrefecturesResponse>
export const get: GetPrefecturesController = async (_req, res, next) => {
  try {
    const data = await getModel()
    res.status(200).send(data)
  } catch (error) {
    const thisError = new ThisError({ error })
    next(thisError)
  }
}
