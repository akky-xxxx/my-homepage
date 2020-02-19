/**
 * import node_modules
 */
import { combineReducers } from "redux"

/**
 * import others
 */
import pagesReducer, { actions as pagesActions, State as PagesState } from "./pages"

/**
 * main
 */
export const actions = {
  pages: pagesActions,
}

export interface State {
  pages: PagesState
}

export default combineReducers({
  pages: pagesReducer,
})
