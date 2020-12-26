// import
import { TagsProps } from "../../../types"
import { UseTagList } from "../modules/useTagList/types"
import { UseAdditionModal } from "../modules/useAdditionModal/types"

// main
type UseTagsReturn = ReturnType<UseTagList> & ReturnType<UseAdditionModal>
export type UseTags = (props: TagsProps) => UseTagsReturn
