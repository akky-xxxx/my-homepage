// import
import {TagsProps} from "../../../types"
import {UseTagList} from "../modules/useTagList/types"
import {UseAdditionModal} from "../modules/useAdditionModal/types"
import {UseChangingModal} from "../modules/useChangingModal/types"

// main
type UseTagsReturn = ReturnType<UseTagList> & ReturnType<UseAdditionModal> & ReturnType<UseChangingModal>
export type UseTags = (props: TagsProps) => UseTagsReturn
