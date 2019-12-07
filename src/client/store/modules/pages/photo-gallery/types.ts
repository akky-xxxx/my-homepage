/**
 * import node_modules
 */
import { Action } from "redux-actions"

/**
 * import others
 */
import galleryInfoList from "../../../../shared/const/galleryInfoList"
import { HandleAction } from "../../../../shared/types/common"

/**
 * main
 */
// state
export interface State {
  galleryInfoList: typeof galleryInfoList
  isOpen: boolean
  currentImageId: null | number
}

// payload
export interface ImageModalPayload {
  targetId: number
}

// handle actions
export type HandleOpenModalAction = (payload: ImageModalPayload) => Action<ImageModalPayload>

export interface HandleActions {
  handleOpenModal: HandleOpenModalAction
  handleCloseModal: HandleAction
  handleChangeNextImage: HandleAction
  handleChangePrevImage: HandleAction
}
