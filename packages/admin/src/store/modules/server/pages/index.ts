// import node_modules
import { combineReducers } from "@reduxjs/toolkit"

// import others
import { tagsInitialState, tagsReducer, tagsActions } from "./tags"

// main
export const pagesInitialState = {
  tags: tagsInitialState,
} as const

export const pagesReducers = combineReducers({
  tags: tagsReducer,
})

export const pagesActions = {
  tags: tagsActions,
} as const
