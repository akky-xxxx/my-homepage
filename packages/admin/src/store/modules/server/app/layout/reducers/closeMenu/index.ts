// import node_modules
import { CaseReducer } from "@reduxjs/toolkit"

// import others
import { LayoutState } from "../../types"

// main
export const closeMenu: CaseReducer<LayoutState> = (state) => {
  const newState = { ...state }
  newState.isShowMenu = false
  return newState
}
