// import node_modules
import {CaseReducer} from "@reduxjs/toolkit"

// import others
import {TagsState, GetTagsPayload} from "../../types"
import {ReducerAction} from "@@/shared/types/store"

// main
type Action = ReducerAction < GetTagsPayload>
export const getTags: CaseReducer<TagsState, Action> = (_state, action) => ({
  tags: action.payload.newTags,
})
