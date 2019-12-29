/**
 * import node_modules
 */
import { createAction, handleActions } from "redux-actions"

/**
 * import others
 */
import { ImageModalPayload, State, ModalAction } from "./types"

/**
 * main
 */
// action 名の定義
const NAMESPACE = "pages/photo-gallery"
const OPEN_MODAL = `${NAMESPACE}/modal/open`
const CLOSE_MODAL = `${NAMESPACE}/modal/close`

// action 定義
const openModal = createAction<ImageModalPayload>(OPEN_MODAL)
const closeModal = createAction(CLOSE_MODAL)
export const actions = {
  openModal,
  closeModal,
}

// initial state 定義
const initialState: State = {
  isOpen: false,
  currentImageId: null,
}

// reducer
const reducer = handleActions<State, any>(
  {
    [OPEN_MODAL]: (state, action: ModalAction) => {
      const {
        payload: { targetId },
      } = action

      return {
        ...state,
        isOpen: true,
        currentImageId: targetId,
      }
    },

    [CLOSE_MODAL]: state => {
      return {
        ...state,
        isOpen: false,
        currentImageId: null,
      }
    },
  },
  initialState,
)

export default reducer
