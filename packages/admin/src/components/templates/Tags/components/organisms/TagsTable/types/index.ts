// import
import { TagsTableHeaderProps } from "@@/components/templates/Tags/components/molecules/TagsTableHeader/types"
import { TagsTableRecordProps } from "../../../molecules/TagsTableRecord/types"

// main
export type TagsTableProps = TagsTableHeaderProps & {
  tags: Omit<TagsTableRecordProps, "handleClickSelect" | "handleClickRelease">[]
  handleClickSelect: (tagId: string) => void
  handleClickRelease: (tagId: string) => void
}
