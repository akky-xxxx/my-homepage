// import node_modules
import { CaseReducer } from "@reduxjs/toolkit"

// import others
import { SampleState, ChangeTextPayload } from "@@/store/modules/sample/types"
import { ReducerAction } from "@@/shared/types/store"

// main
type Action = ReducerAction<ChangeTextPayload>
export const changeText: CaseReducer<SampleState, Action> = (state, action) => {
  const {
    payload: { newText: text },
  } = action
  const newState: SampleState = {
    ...state,
    text,
  }
  return newState
}
