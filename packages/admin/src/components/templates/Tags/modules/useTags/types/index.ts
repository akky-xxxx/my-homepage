// import
import { TagsTableHeaderProps } from "../../../components/molecules/TagsTableHeader/types"
import { TagsTableRecordStates } from "../../../components/molecules/TagsTableRecord/types"
import { TagsProps } from "../../../types"

// main
type HandleClickSelect = (tagId: string) => void
type HandleClickRelease = (tagId: string) => void
type UseTagsReturn = TagsTableHeaderProps & {
  tags: TagsTableRecordStates[]
  handleClickSelect: HandleClickSelect
  handleClickRelease: HandleClickRelease
}
export type UseTags = (props: TagsProps) => UseTagsReturn
