// import node_modules
import { NullableDate } from "shared-items/dist/client"
import { addDays, subDays } from "date-fns"

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

    const startDate = subDays(start || startInitDate, 0)
    const endDate = addDays(end || endInitDate, 0)
    const target = new Date(tag[targetType])

    return startDate <= target && target <= endDate
  }
  return filterByDateMain
}
