/**
 * import node_modules
 */
import { combineReducers } from "@reduxjs/toolkit"

/**
 * import others
 */
import modalModule from "./modal"
import viewPrefModule from "./viewPref"
import viewTagsModule from "./viewTags"

/**
 * main
 */
const { actions: modalActions, reducer: modalReducer } = modalModule
const { actions: viewPrefActions, reducer: viewPrefReducer } = viewPrefModule
const { actions: viewTagsActions, reducer: viewTagsReducer } = viewTagsModule

export const actions = {
  ...modalActions,
  ...viewPrefActions,
  ...viewTagsActions,
}

// reducer
const reducer = combineReducers({
  modal: modalReducer,
  selectedViewPref: viewPrefReducer,
  selectedViewTags: viewTagsReducer,
})

export default reducer
