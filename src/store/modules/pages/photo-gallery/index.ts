/**
 * import node_modules
 */
import { combineReducers } from "@reduxjs/toolkit"

/**
 * import others
 */
import modalModule, { initialState as modalInitialState } from "./modal"
import viewPrefModule, { initialState as viewPrefInitialState } from "./viewPref"
import viewTagsModule, { initialState as viewTagsInitialState } from "./viewTags"

/**
 * main
 */
const { actions: modalActions, reducer: modalReducer } = modalModule
const { actions: viewPrefActions, reducer: viewPrefReducer } = viewPrefModule
const { actions: viewTagsActions, reducer: viewTagsReducer } = viewTagsModule

// actions
export const actions = {
  ...modalActions,
  ...viewPrefActions,
  ...viewTagsActions,
}

// initial state
export const initialState = {
  modal: modalInitialState,
  selectedViewPref: viewPrefInitialState,
  selectedViewTags: viewTagsInitialState,
}

// reducer
const reducer = combineReducers({
  modal: modalReducer,
  selectedViewPref: viewPrefReducer,
  selectedViewTags: viewTagsReducer,
})

export default reducer
