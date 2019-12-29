/**
 * import node_modules
 */
import { createAction, handleActions } from "redux-actions"

/**
 * import others
 */
import { ImageModalPayload, State, SelectViewPrefPayload, ModalAction, SelectViewAction } from "./types"
import galleryInfoList from "../../../../shared/const/galleryInfoList"
import { visibleModalReducer } from "./utils"

/**
 * main
 */
// action 名の定義
const NAMESPACE = "pages/photo-gallery"
const OPEN_MODAL = `${NAMESPACE}/modal/open`
const CLOSE_MODAL = `${NAMESPACE}/modal/close`
const SELECT_PREF = `${NAMESPACE}/filter/pref`

// action 定義
const openModal = createAction<ImageModalPayload>(OPEN_MODAL)
const closeModal = createAction(CLOSE_MODAL)
const selectViewPref = createAction<SelectViewPrefPayload>(SELECT_PREF)
export const actions = {
  openModal,
  closeModal,
  selectViewPref,
}

// initial state 定義
const initialState: State = {
  galleryInfoList,
  isOpen: false,
  currentImageId: null,
  selectedViewPref: "00",
}

// reducer
const reducer = handleActions<State, any>(
  {
    [OPEN_MODAL]: (state, action: ModalAction) => {
      const {
        payload: { targetId },
      } = action

      return visibleModalReducer(state, targetId, true)
    },

    [CLOSE_MODAL]: state => {
      return visibleModalReducer(state, null, false)
    },

    [SELECT_PREF]: (state, action: SelectViewAction) => {
      const {
        payload: { targetPref },
      } = action

      return {
        ...state,
        viewPref: targetPref,
      }
    },
  },
  initialState,
)

export default reducer
