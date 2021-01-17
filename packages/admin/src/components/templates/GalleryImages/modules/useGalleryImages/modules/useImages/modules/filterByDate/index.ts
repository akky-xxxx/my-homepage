// import node_modules
import { NullableDate } from "shared-items/dist/client"
import { isBefore, isAfter, isEqual, startOfDay, addDays } from "date-fns"

// import others
import { Image } from "../../types"

// main
const startInitDate = new Date("2000-01-01")
const endInitDate = new Date("5000-12-31")

type TargetDates = Pick<Image, "photographAt" | "createdAt" | "updatedAt">
type FilterByDateMain = (image: TargetDates) => boolean
type FilterByDateProps = {
  start: NullableDate
  end: NullableDate
  targetType: keyof TargetDates
}
type FilterByDate = (props: FilterByDateProps) => FilterByDateMain

export const filterByDate: FilterByDate = (props) => {
  const { start, end, targetType } = props
  const isNotFilter = !start && !end
  const filterByDateMain: FilterByDateMain = (image) => {
    if (isNotFilter) return true
    const targetStringDate = image[targetType]
    if (!targetStringDate) return false

    const startDate = startOfDay(start || new Date(startInitDate))
    const endDate = addDays(startOfDay(end || new Date(endInitDate)), 1)
    const target = new Date(targetStringDate)
    const isBeforeOrEqual =
      isBefore(startDate, target) || isEqual(startDate, target)
    const isAfterOrEqual = isAfter(endDate, target) || isAfter(endDate, target)

    return isBeforeOrEqual && isAfterOrEqual
  }
  return filterByDateMain
}
