// import
import { RootState } from "@@/store"
import { TagsTableRecordStates } from "../components/molecules/TagsTableRecord/types"
import { HandleAddTagsMain } from "../components/organisms/AdditionModal/modules/useAdditionalModal/types"
import { HandleUpdateTagsMain } from "../components/organisms/ChangingModal/modules/useChangingModal/types"

// main
export type TagsProps = {
  tags: Omit<TagsTableRecordStates, "isSelect">[]
  handleUpdateTagsMain: HandleUpdateTagsMain
  handleAddTagsMain: HandleAddTagsMain
} & RootState["client"]["pages"]["tags"]
