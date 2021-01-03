// import node_modules
import { OptionsType } from "react-select"

// import others
import { TagsTableRecordStates } from "@@/components/templates/Tags/components/molecules/TagsTableRecord/types"
import { SelectOption } from "@@/shared/types/lib"

// main
type FilterBySelectedMain = (tag: TagsTableRecordStates) => boolean
type FilterBySelected = (
  selectedOptions: OptionsType<SelectOption> | null,
) => FilterBySelectedMain

export const filterBySelected: FilterBySelected = (selectedOptions) => {
  const filterBySelectedMain: FilterBySelectedMain = (tag) => {
    if (!selectedOptions) return true
    const findResult = selectedOptions.find(
      (selectedOption) => selectedOption.value === tag.tagId,
    )
    return Boolean(findResult)
  }

  return filterBySelectedMain
}
