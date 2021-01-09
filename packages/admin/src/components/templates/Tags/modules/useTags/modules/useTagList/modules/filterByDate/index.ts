// import node_modules
import { NullableDate } from "shared-items/dist/client"
import { isBefore, isAfter, isEqual, startOfDay, addDays } from "date-fns"

// import others
import { TagsTableRecordStates } from "@@/components/templates/Tags/components/molecules/TagsTableRecord/types"

// main
const startInitDate = new Date("2000-01-01")
const endInitDate = new Date("5000-12-31")

type FilterByDateMain = (tags: TagsTableRecordStates) => boolean
type FilterByDateProps = {
  start: NullableDate
  end: NullableDate
  targetType: keyof Pick<TagsTableRecordStates, "createdAt" | "updatedAt">
}
type FilterByDate = (props: FilterByDateProps) => FilterByDateMain

export const filterByDate: FilterByDate = (props) => {
  const { start, end, targetType } = props
  const isNotFilter = !start && !end
  const filterByDateMain: FilterByDateMain = (tag) => {
    if (isNotFilter) return true

    const startDate = startOfDay(start || new Date(startInitDate))
    const endDate = addDays(startOfDay(end || new Date(endInitDate)), 1)
    const target = new Date(tag[targetType])
    const isBeforeOrEqual =
      isBefore(startDate, target) || isEqual(startDate, target)
    const isAfterOrEqual = isAfter(endDate, target) || isAfter(endDate, target)

    return isBeforeOrEqual && isAfterOrEqual
  }
  return filterByDateMain
}
