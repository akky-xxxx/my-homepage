// import
import { TagsTableHeaderProps } from "@@/components/templates/Tags/components/molecules/TagsTableHeader/types"
import { TagsTableRecordStates } from "../../../molecules/TagsTableRecord/types"

// main
export type TagsTableProps = TagsTableHeaderProps & {
  tags: TagsTableRecordStates[]
  handleClickSelect: (tagId: string) => void
  handleClickRelease: (tagId: string) => void
}
