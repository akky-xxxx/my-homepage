// import node_modules
import { CaseReducer } from "@reduxjs/toolkit"

// import others
import { SampleState } from "@@/store/modules/sample/types"

// main
export const decrement: CaseReducer<SampleState> = (state) => {
  const newState = { ...state }
  newState.counter += 1
  return newState
}
