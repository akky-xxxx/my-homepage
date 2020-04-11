/**
 * import node_modules
 */
import { uniq } from "remeda"

/**
 * import others
 */
import galleryInfoList from "../../../../../shared/const/galleryInfoList"
import { GalleryItem } from "../../../../../shared/types/pages/galleryList"

/**
 * main
 */
type ExtractDate = (galleryInfo: GalleryItem) => string
type Str2date = (str: string) => Date
type CompareDate = (a: Date, b: Date) => 1 | 0 | -1

const extractDate: ExtractDate = (galleryInfo) => galleryInfo.date
const str2date: Str2date = (str) => new Date(str)
const compareDate: CompareDate = (aDate, bDate) => {
  if (aDate > bDate) return 1
  if (aDate < bDate) return -1
  return 0
}

const dateList = uniq(galleryInfoList.map(extractDate)).map(str2date).sort(compareDate)

export const minDate = new Date(dateList[0])
export const maxDate = new Date(dateList[dateList.length - 1])
