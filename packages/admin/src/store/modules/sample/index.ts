// import node_modules
import { createSlice } from "@reduxjs/toolkit"

// import others
import { SampleState } from "@@/store/modules/sample/types"
import { reducers, CaseReducers } from "./reducers"

// main
export const initialState: SampleState = {
  counter: 0,
  text: "",
}
const counterSlice = createSlice<SampleState, CaseReducers>({
  name: "sample",
  initialState,
  reducers,
})

const { reducer: sampleReducer, actions: sampleActions } = counterSlice

export { sampleReducer, sampleActions }
