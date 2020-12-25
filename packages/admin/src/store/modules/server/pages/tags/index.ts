// import node_modules
import { createSlice } from "@reduxjs/toolkit"

// import others
import { TagsState } from "./types"
import { reducers, CaseReducers } from "./reducers"

// main
export const tagsInitialState: TagsState = {
  tags: [],
}

const layoutSlice = createSlice<TagsState, CaseReducers>({
  name: "server/pages/tags",
  initialState: tagsInitialState,
  reducers,
})

const { reducer: tagsReducer, actions: tagsActions } = layoutSlice
export { tagsReducer, tagsActions }
