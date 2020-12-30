// import
import { RootState } from "@@/store"
import { TagsTableRecordStates } from "../components/molecules/TagsTableRecord/types"
import { HandleAddTagsMain } from "../components/organisms/AdditionModal/modules/useAdditionalModal/types"
import { HandleUpdateTagsMain } from "../components/organisms/ChangingModal/modules/useChangingModal/types"
import { HandleDeleteTagsMain } from "../components/organisms/DeletingModal"

// main
export type TagsProps = {
  tags: Omit<TagsTableRecordStates, "isSelect">[]
  handleUpdateTagsMain: HandleUpdateTagsMain
  handleAddTagsMain: HandleAddTagsMain
  handleDeleteTagsMain: HandleDeleteTagsMain
} & RootState["client"]["pages"]["tags"]
