/**
 * import node_modules
 */
import { differenceInMonths } from "date-fns"

/**
 * import others
 */
import { PrefCode } from "../../../../../shared/types/common"
import galleryInfoList from "../../../../../shared/const/galleryInfoList"

/**
 * main
 */
interface PrefData {
  prefCode: PrefCode
  count: number
}

interface ReducePrefData {
  prefCode: PrefCode
  count: number
}

type GetPrefData = (startMonth: number, endMonth: number) => PrefData[]

const today = new Date()

const getPrefData: GetPrefData = (startMonth, endMonth) => {
  return galleryInfoList
    .filter((galleryInfo) => {
      const diff = differenceInMonths(today, new Date(galleryInfo.date))
      return diff <= startMonth && diff >= endMonth
    }) // 日付 filter
    .reduce<ReducePrefData[]>((reducingData, galleryInfo, _index, originArr) => {
      const { prefCode } = galleryInfo

      if (reducingData.find((reducing) => reducing.prefCode === galleryInfo.prefCode)) return reducingData

      reducingData.push({
        prefCode,
        count: originArr.filter((_galleryInfo) => _galleryInfo.prefCode === prefCode).length,
      })

      return reducingData
    }, []) // 表示用の形式に変更
}

export default getPrefData
