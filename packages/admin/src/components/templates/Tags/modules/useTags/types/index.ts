// import
import { TagsProps } from "../../../types"
import { UseTagList } from "../modules/useTagList/types"

// main
type UseTagsReturn = ReturnType<UseTagList> & {
  isShowAddModal: boolean
  handleShowAddModal: () => void
  handleHideAddModal: () => void
}
export type UseTags = (props: TagsProps) => UseTagsReturn
