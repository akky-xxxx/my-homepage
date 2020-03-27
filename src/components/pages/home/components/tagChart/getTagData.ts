/**
 * import node_modules
 */
import { clone, pick } from "remeda"
import { differenceInMonths } from "date-fns"

/**
 * import others
 */
import galleryInfoList from "../../../../../shared/const/galleryInfoList"

/**
 * main
 */
interface TagData {
  name: string
  count: number
}

type GetTagData = (startMonth: number, endMonth: number) => TagData[]

const today = new Date()

const getTagData: GetTagData = (startMonth, endMonth) => {
  const tagDataOrigin = galleryInfoList
    .filter((galleryInfo) => {
      const diff = differenceInMonths(today, new Date(galleryInfo.date))
      return diff <= startMonth && diff >= endMonth
    }) // 日付 filter
    .map((galleryInfo) => pick(galleryInfo, ["date", "tags"])) // 日付とタグだけに絞り込み
    .reduce<Record<string, number>>((obj, tagData) => {
      const newObj = clone(obj)
      tagData.tags.forEach((tag) => {
        newObj[tag] = newObj[tag] !== undefined ? newObj[tag] + 1 : 1
      })
      return newObj
    }, {}) // tagName : count の配列を生成

  const tagData: TagData[] = Object.keys(tagDataOrigin)
    .map((key) => ({
      name: key,
      count: tagDataOrigin[key],
    })) // 表示用の形式に変更
    .sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      return 0
    }) // 五十音順ソート

  return tagData
}

export default getTagData
