// import
import { TagsTableRecordStates } from "@@/components/templates/Tags/components/molecules/TagsTableRecord/types"

// main
type FilterByTextMain = (tag: TagsTableRecordStates) => boolean
type FilterByText = (filterText: string) => FilterByTextMain

export const filterByText: FilterByText = (filterText) => {
  const filterBySelectedMain: FilterByTextMain = (tag) => {
    if (!filterText) return true
    return tag.tagName.includes(filterText)
  }

  return filterBySelectedMain
}
