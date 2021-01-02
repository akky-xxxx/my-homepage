// import
import { ResponseData } from "@@/shared/types/api"

// main
// read (get)
export type GetPrefecture = {
  prefectureCode: string
  prefectureName: string
}

export type GetPrefecturesResponse = ResponseData<{
  prefectures: GetPrefecture[]
}>
