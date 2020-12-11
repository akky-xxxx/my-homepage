// import node_modules
import { createSlice } from "@reduxjs/toolkit"

// import others
import { SampleState } from "@@/store/modules/sample/types"
import { reducers, CaseReducers } from "./reducers"

// main
const counterSlice = createSlice<SampleState, CaseReducers>({
  name: "sample",
  initialState: {
    counter: 0,
    text: "",
  },
  reducers,
})

const { reducer: sampleReducer, actions: sampleActions } = counterSlice

export { sampleReducer, sampleActions }
