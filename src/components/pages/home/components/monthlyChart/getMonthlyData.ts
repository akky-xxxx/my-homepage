/**
 * import node_modules
 */
import { format, subMonths, differenceInMonths } from "date-fns"

/**
 * import others
 */
import galleryInfoList from "../../../../../shared/const/galleryInfoList"

/**
 * main
 */
interface MonthlyData {
  date: string
  count: number
}

type GetMonthlyData = (startMonth: number, endMonth: number, isIgnoreBlank: boolean) => MonthlyData[]

const today = new Date()

const getMonthlyData: GetMonthlyData = (startMonth, endMonth, isIgnoreBlank) => {
  return [...new Array(startMonth)]
    .map((_, index) => format(subMonths(today, index + 1), "yyyy-MM-01")) // 毎月1日の配列作成
    .filter((date) => differenceInMonths(today, new Date(date)) >= endMonth) // 直近を endMonth で切る
    .reverse() // 表示用に配列を逆転
    .map((month) => ({
      date: format(new Date(month), "yyyy/M"),
      count: galleryInfoList.filter((galleryInfo) => format(new Date(galleryInfo.date), "yyyy-MM-01") === month).length,
    })) // 表示用の形式に変更
    .filter((data) => (isIgnoreBlank ? data.count : true)) // ブランク月の制御
}

export default getMonthlyData
