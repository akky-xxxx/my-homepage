// import node_modules
import { combineReducers } from "@reduxjs/toolkit"

// import others
import { pagesInitialState, pagesReducers, pagesActions } from "./pages"

// main
export const clientInitialState = {
  pages: pagesInitialState,
} as const

export const clientReducer = combineReducers({
  pages: pagesReducers,
})

export const clientActions = {
  pages: pagesActions,
} as const
