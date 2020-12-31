// import
import { TagsTableHeaderProps } from "@@/components/templates/Tags/components/molecules/TagsTableHeader/types"
import { TagsTableRecordStates } from "@@/components/templates/Tags/components/molecules/TagsTableRecord/types"
import { TagsProps } from "@@/components/templates/Tags/types"

// main
type HandleClickSelect = (tagId: string) => void
type HandleClickRelease = (tagId: string) => void
type UseTagListReturn = TagsTableHeaderProps & {
  isSelectSome: boolean
  tags: TagsTableRecordStates[]
  selectedTags: TagsTableRecordStates[]
  handleClickSelect: HandleClickSelect
  handleClickRelease: HandleClickRelease
}
export type UseTagList = (props: TagsProps) => UseTagListReturn
