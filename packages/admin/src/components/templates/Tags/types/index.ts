// import
import { TagsTableRecordStates } from "../components/molecules/TagsTableRecord/types"

// main
export type TagsProps = {
  tags: Omit<TagsTableRecordStates, "isSelect">[]
}
