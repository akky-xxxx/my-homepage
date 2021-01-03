// import node_modules
import { ValueType, OptionsType } from "react-select"

// import others
import { TagsTableHeaderProps } from "@@/components/templates/Tags/components/molecules/TagsTableHeader/types"
import { TagsTableRecordStates } from "@@/components/templates/Tags/components/molecules/TagsTableRecord/types"
import { TagsProps } from "@@/components/templates/Tags/types"
import { SelectOption } from "@@/shared/types/lib"

// main
type HandleClickSelect = (tagId: string) => void
type HandleClickRelease = (tagId: string) => void
type HandleSelectOptions = (values: ValueType<SelectOption, true>) => void

type UseTagListReturn = TagsTableHeaderProps & {
  isSelectSome: boolean
  tags: TagsTableRecordStates[]
  selectedTags: TagsTableRecordStates[]
  selectOptions: SelectOption[]
  selectedOptions: null | OptionsType<SelectOption>
  handleClickSelect: HandleClickSelect
  handleClickRelease: HandleClickRelease
  handleSelectOptions: HandleSelectOptions
}

export type UseTagList = (props: TagsProps) => UseTagListReturn
