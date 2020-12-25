// import
import { TagsTableRecordProps } from "../components/molecules/TagsTableRecord/types"

// main
export type TagsProps = {
  tags: Omit<TagsTableRecordProps, "handleClickSelect" | "handleClickRelease">[]
}
