// import node_modules
import { useReducer } from "react"
import { TagsTableRecordStates } from "@@/components/templates/Tags/components/molecules/TagsTableRecord/types"

// import others
import {
  TOGGLE_SELECT,
  TOGGLE_ALL_SELECT,
  UPDATE_TAGS,
} from "./modules/ActionTypes"
import { tagsReducer } from "./modules/tagsReducer"

// main
type UpdateTags = (newTags: TagsTableRecordStates[]) => void
type ToggleSelect = (tagId: string) => void
type ToggleAllSelect = (isSelectAll: boolean) => void

type UseTagsReducerProps = {
  tags: TagsTableRecordStates[]
}
type UseTagsReducerReturn = {
  tags: TagsTableRecordStates[]
  updateTags: UpdateTags
  toggleSelect: ToggleSelect
  toggleAllSelect: ToggleAllSelect
}
type UseTagsReducer = (props: UseTagsReducerProps) => UseTagsReducerReturn

export const useTagsReducer: UseTagsReducer = (props) => {
  const [tags, tagsDispatch] = useReducer(tagsReducer, props.tags)
  const updateTags: UpdateTags = (newTags) =>
    tagsDispatch({ type: UPDATE_TAGS, payload: { newTags } })
  const toggleSelect: ToggleSelect = (tagId) =>
    tagsDispatch({ type: TOGGLE_SELECT, payload: { tagId } })
  const toggleAllSelect: ToggleAllSelect = (isSelectAll) =>
    tagsDispatch({ type: TOGGLE_ALL_SELECT, payload: { isSelectAll } })

  return {
    tags,
    updateTags,
    toggleSelect,
    toggleAllSelect,
  }
}
