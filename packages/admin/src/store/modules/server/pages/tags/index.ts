// import node_modules
import { createSlice } from "@reduxjs/toolkit"

// import reducers
import { reducers, CaseReducers } from "./reducers"

// import others
import { TagsState } from "./types"
import { TYPE_BASE } from "./const"

// main
export const tagsInitialState: TagsState = {
  tags: [],
  isLoading: false,
}

const layoutSlice = createSlice<TagsState, CaseReducers>({
  name: TYPE_BASE,
  initialState: tagsInitialState,
  reducers,
})

const { reducer: tagsReducer, actions: tagsActions } = layoutSlice
export { tagsReducer, tagsActions }
