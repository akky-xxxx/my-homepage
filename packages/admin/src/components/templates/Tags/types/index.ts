// import
import { TagsTableRecordStates } from "../components/molecules/TagsTableRecord/types"
import { HandleUpdateTagsMain } from "../components/organisms/ChangingModal/modules/useChangingModal/types"

// main
export type TagsProps = {
  tags: Omit<TagsTableRecordStates, "isSelect">[]
  handleUpdateTagsMain: HandleUpdateTagsMain
}
