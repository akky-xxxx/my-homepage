/**
 * import node_modules
 */
import { Action } from "redux-actions"

/**
 * import others
 */
import { HandleAction } from "../../../../../shared/types/common"

/**
 * main
 */

// state
export interface State {
  isOpen: boolean
  currentImageId: null | number
}

// payload
export interface ImageModalPayload {
  targetId: number
}

// action
export interface ModalAction {
  payload: ImageModalPayload
}

// handle actions
export type HandleOpenModalAction = (payload: ImageModalPayload) => Action<ImageModalPayload>

export interface HandleActions {
  handleOpenModal: HandleOpenModalAction
  handleCloseModal: HandleAction
}
