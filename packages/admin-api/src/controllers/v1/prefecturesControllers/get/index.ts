// import node_modules
import { RequestHandler } from "express"
import { ThisError } from "shared-items"

// import others
import { GetPrefecturesResponse } from "@@/shared/types/api/v1/prefectures"
import { prefectures } from "@@/models/v1/prefectures/get"

// main
type GetPrefecturesController = RequestHandler<never, GetPrefecturesResponse>
export const get: GetPrefecturesController = async (_req, res, next) => {
  try {
    const data = await prefectures()
    res.status(200).send(data)
  } catch (error) {
    const thisError = new ThisError({ error })
    next(thisError)
  }
}
