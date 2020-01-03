/**
 * import node_modules
 */
import { combineReducers } from "@reduxjs/toolkit"

/**
 * import others
 */
import modalModule from "./modal"
import viewPrefModule from "./viewPref"

/**
 * main
 */
const { actions: modalActions, reducer: modalReducer } = modalModule
const { actions: viewPrefActions, reducer: viewPrefReducer } = viewPrefModule

export const actions = {
  ...modalActions,
  ...viewPrefActions,
}

// reducer
const reducer = combineReducers({
  modal: modalReducer,
  selectedViewPref: viewPrefReducer,
})

export default reducer
