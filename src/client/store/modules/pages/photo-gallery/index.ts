/**
 * import node_modules
 */
import { combineReducers } from "redux"

/**
 * import others
 */
import { State } from "./types"
import modalReducer, { actions as modalActions } from "./modal"
import viewPrefReducer, { actions as viewPrefActions } from "./viewPref"

/**
 * main
 */
export const actions = {
  ...modalActions,
  ...viewPrefActions,
}

// reducer
const reducer = combineReducers<State>({
  modal: modalReducer,
  selectedViewPref: viewPrefReducer,
})

export default reducer
