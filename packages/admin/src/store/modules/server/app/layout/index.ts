// import node_modules
import { createSlice } from "@reduxjs/toolkit"

// import others
import { LayoutState } from "./types"
import { reducers, CaseReducers } from "./reducers"

// main
export const layoutInitialState: LayoutState = {
  isShowMenu: false,
  title: "管理画面",
}

const layoutSlice = createSlice<LayoutState, CaseReducers>({
  name: "server/app/layout",
  initialState: layoutInitialState,
  reducers,
})

const { reducer: layoutReducer, actions: layoutActions } = layoutSlice
export { layoutReducer, layoutActions }
