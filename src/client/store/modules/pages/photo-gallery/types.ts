/**
 * import node_modules
 */
import { Action } from "redux-actions"

/**
 * import others
 */
import galleryInfoList from "../../../../shared/const/galleryInfoList"

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
