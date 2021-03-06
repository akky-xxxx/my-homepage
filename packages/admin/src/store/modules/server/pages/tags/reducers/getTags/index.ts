// import node_modules
import { CaseReducer } from "@reduxjs/toolkit"

// import others
import { ReducerAction } from "@@/shared/types/store"
import { TagsState, GetTagsPayload } from "../../types"

// main
type Action = ReducerAction<GetTagsPayload>
export const getTags: CaseReducer<TagsState, Action> = (state, action) => ({
  ...state,
  tags: action.payload.newTags,
})
