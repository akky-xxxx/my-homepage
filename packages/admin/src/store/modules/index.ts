// import node_modules
import { combineReducers } from "@reduxjs/toolkit"

// import others
import { sampleReducer, sampleActions } from "./sample"

// main
export const reducer = combineReducers({
  sample: sampleReducer,
})

export const actions = {
  sample: sampleActions,
}
