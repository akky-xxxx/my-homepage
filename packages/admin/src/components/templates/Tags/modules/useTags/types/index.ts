// import
import { TagsProps } from "../../../types"
import { UseTagList } from "../modules/useTagList/types"
import { UseAdditionModal } from "../modules/useAdditionModal/types"
import { UseChangingModal } from "../modules/useChangingModal/types"
import { UseDeletingModal } from "../modules/useDeletingModal/types"

// main
type UseTagsReturn = ReturnType<UseTagList> &
  ReturnType<UseAdditionModal> &
  ReturnType<UseChangingModal> &
  ReturnType<UseDeletingModal>
export type UseTags = (props: TagsProps) => UseTagsReturn
