// import node_modules
import { createSlice } from "@reduxjs/toolkit"

// import reducers
import { reducers, CaseReducers } from "./reducers"
import { extraReducersActions, extraReducers } from "./extraReducers"

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
  extraReducers,
})

const { reducer: tagsReducer, actions } = layoutSlice
const tagsActions = {
  ...actions,
  ...extraReducersActions,
}

export { tagsReducer, tagsActions }
