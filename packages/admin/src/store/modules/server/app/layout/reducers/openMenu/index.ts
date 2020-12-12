// import node_modules
import { CaseReducer } from "@reduxjs/toolkit"

// import others
import { LayoutState } from "../../types"

// main
export const openMenu: CaseReducer<LayoutState> = (state) => {
  const newState = { ...state }
  newState.isShowMenu = true
  return newState
}
