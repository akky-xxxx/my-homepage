/**
 * import node_modules
 */
import { createAction, handleActions } from "redux-actions"

/**
 * import others
 */
import { State, SelectViewPrefPayload, SelectViewAction } from "./types"

/**
 * main
 */
// action 名の定義
const NAMESPACE = "pages/photo-gallery"
const SELECT_PREF = `${NAMESPACE}/filter/pref`

// action 定義
const selectViewPref = createAction<SelectViewPrefPayload>(SELECT_PREF)
export const actions = {
  selectViewPref,
}

// initial state 定義
const initialState: State = "00"

// reducer
const reducer = handleActions<State, any>(
  {
    [SELECT_PREF]: (_state, action: SelectViewAction) => {
      const {
        payload: { targetPref },
      } = action

      return targetPref
    },
  },
  initialState,
)

export default reducer
