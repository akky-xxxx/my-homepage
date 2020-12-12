// import node_modules
import { CaseReducer } from "@reduxjs/toolkit"

// import others
import { ReducerAction } from "@@/shared/types/store"
import { LayoutState, ChangeTitlePayload } from "../../types"

// main
type Action = ReducerAction<ChangeTitlePayload>
export const changeTitle: CaseReducer<LayoutState, Action> = (
  state,
  action,
) => {
  const {
    payload: { newTitle },
  } = action
  return {
    ...state,
    title: newTitle,
  }
}
