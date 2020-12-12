// import node_modules
import { combineReducers } from "@reduxjs/toolkit"

// import others
import { appInitialState, appReducers, appActions } from "./app"

// main
export const serverInitialState = {
  app: appInitialState,
} as const

export const serverReducer = combineReducers({
  app: appReducers,
})

export const serverActions = {
  app: appActions,
} as const
