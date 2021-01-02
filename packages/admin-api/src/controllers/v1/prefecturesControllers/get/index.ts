// import node_modules
import { RequestHandler } from "express"
import { ThisError } from "shared-items"

// import others
import { GetPrefecturesResponse } from "@@/shared/types/api/v1/prefectures"

// main
type GetPrefecturesController = RequestHandler<never, GetPrefecturesResponse>
export const get: GetPrefecturesController = async (_req, res, next) => {
  try {
    // TODO: 仮データ
    const prefectures = [
      {
        prefectureCode: "00",
        prefectureName: "未設定",
      },
    ]
    res.status(200).send({ data: { prefectures } })
  } catch (error) {
    const thisError = new ThisError({ error })
    next(thisError)
  }
}
