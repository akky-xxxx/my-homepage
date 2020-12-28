// import node_modules
import { createSlice } from "@reduxjs/toolkit"

// import others
import { State } from "./types"
import { TYPE_BASE } from "./const"
import { updateTags, updateTagsCases } from "./extraReducers/updateTagsCases"

// main
export const tagsInitialState: State = {
  isLoading: false,
}

const tagsSlice = createSlice({
  name: TYPE_BASE,
  initialState: tagsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(...updateTagsCases.pending)
    builder.addCase(...updateTagsCases.fulfilled)
    builder.addCase(...updateTagsCases.rejected)
  },
})

const { reducer: tagsReducer, actions } = tagsSlice
const tagsActions = {
  ...actions,
  updateTags,
}

export { tagsReducer, tagsActions }
