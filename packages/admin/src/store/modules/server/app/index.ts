// import node_modules
import { combineReducers } from "@reduxjs/toolkit"

// import others
import { layoutInitialState, layoutReducer, layoutActions } from "./layout"

// main
export const appInitialState = {
  layout: layoutInitialState,
} as const

export const appReducers = combineReducers({
  layout: layoutReducer,
})

export const appActions = {
  layout: layoutActions,
} as const
