/**
 * import node_modules
 */
import { useMemo } from "react"
import { isWithinInterval, addDays, subDays } from "date-fns"

/**
 * import others
 */
import { GalleryItem } from "../../../shared/types/pages/galleryList"
import { PrefCode } from "../../../shared/types/common"
import { State as ViewDateState } from "../../../store/modules/pages/photo-gallery/viewDate/types"

/**
 * main
 */
interface UseFilteredListArgs {
  galleryInfoList: GalleryItem[]
  selectedViewPref: PrefCode | "00"
  selectedViewTags: string[]
  selectedViewDate: ViewDateState
}

type UseFilteredList = (args: UseFilteredListArgs) => GalleryItem[]

type nullableDate = string | null
interface GetDateReturn {
  startDate: Date
  endDate: Date
}
type GetDate = (startDateStr: nullableDate, endDateStr: nullableDate) => GetDateReturn
const getDate: GetDate = (startDateStr, endDateStr) => {
  const startDate = startDateStr ? new Date(startDateStr) : new Date("1900/01/01")
  const endDate = endDateStr ? new Date(endDateStr) : new Date()
  return { startDate, endDate }
}

const useFilteredList: UseFilteredList = (args) => {
  const { galleryInfoList, selectedViewPref, selectedViewTags, selectedViewDate } = args
  const selectedViewTagsStr = selectedViewTags.join("")
  const selectedViewDateStr = selectedViewDate.filter(Boolean).map((date) => date!.toString()).join("")
  const [startDateStr, endDateStr] = selectedViewDate
  const { startDate, endDate } = useMemo(() => getDate(startDateStr, endDateStr), [startDateStr, endDateStr])

  const filteredByPref = useMemo(() => {
    return galleryInfoList.filter((galleryInfo) => {
      if (selectedViewPref === "00") return true
      return galleryInfo.prefCode === selectedViewPref
    })
  }, [selectedViewPref])

  const filteredByTag = useMemo(() => {
    return filteredByPref.filter((galleryInfo) => {
      if (selectedViewTags.length === 0) return true
      return selectedViewTags.every((tag) => galleryInfo.tags.includes(tag))
    })
  }, [selectedViewTagsStr, filteredByPref])

  return useMemo(() => {
    return filteredByTag.filter((galleryInfo) => {
      const { date } = galleryInfo
      return isWithinInterval(
        new Date(date),
        {
          start: subDays(startDate, 1),
          end: addDays(endDate, 1),
        }
      )
    })
  }, [selectedViewDateStr, filteredByPref, filteredByTag])
}

export default useFilteredList
