// import node_modules
import { ChangeEventHandler } from "react"
import { ValueType } from "react-select"

// import others
import { TagsTableHeaderProps } from "@@/components/templates/Tags/components/molecules/TagsTableHeader/types"
import { TagsTableRecordStates } from "@@/components/templates/Tags/components/molecules/TagsTableRecord/types"
import { TagsProps } from "@@/components/templates/Tags/types"
import { SelectOption } from "@@/shared/types/lib"
import { Page, HandleClickPagination } from "../modules/usePagination"
import { UseTagConditions } from "../modules/useTagConditions/types"

// main
type HandleClickSelect = (tagId: string) => void
type HandleClickRelease = (tagId: string) => void
type HandleSelectOptions = (values: ValueType<SelectOption, true>) => void

type ConditionTypes = Pick<
  ReturnType<UseTagConditions>,
  | "selectedOptions"
  | "filterText"
  | "createStartDate"
  | "createEndDate"
  | "updateStartDate"
  | "updateEndDate"
  | "handleChangeCreateStartDate"
  | "handleChangeCreateEndDate"
  | "handleChangeUpdateStartDate"
  | "handleChangeUpdateEndDate"
>

type UseTagListReturn = TagsTableHeaderProps & {
  isSelectSome: boolean
  tags: TagsTableRecordStates[]
  selectedTags: TagsTableRecordStates[]
  selectOptions: SelectOption[]
  displayTags: TagsTableRecordStates[]
  maxPages: number
  currentPage: Page
  handleChangeFilterText: ChangeEventHandler<HTMLInputElement>
  handleClickSelect: HandleClickSelect
  handleClickRelease: HandleClickRelease
  handleSelectOptions: HandleSelectOptions
  handleClickPagination: HandleClickPagination
} & ConditionTypes

type UseTagListProps = Pick<
  TagsProps,
  "tags" | "isLoaded" | "handleGetTags" | "handleUpdateTagsMain"
>
export type UseTagList = (props: UseTagListProps) => UseTagListReturn
