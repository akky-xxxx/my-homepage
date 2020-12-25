// import node_modules
import { combineReducers } from "@reduxjs/toolkit"

// import others
import { appInitialState, appReducers, appActions } from "./app"
import { pagesInitialState, pagesReducers, pagesActions } from "./pages"

// main
export const serverInitialState = {
  app: appInitialState,
  pages: pagesInitialState,
} as const

export const serverReducer = combineReducers({
  app: appReducers,
  pages: pagesReducers,
})

export const serverActions = {
  app: appActions,
  pages: pagesActions,
} as const
