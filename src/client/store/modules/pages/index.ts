/**
 * import node_modules
 */
import { combineReducers } from "redux"

/**
 * import others
 */
import photoGallery, { actions as photoGalleryActions } from "./photo-gallery"
import { State as PhotoGalleryState } from "./photo-gallery/types"

/**
 * main
 */
export const actions = {
  photoGallery: photoGalleryActions,
}

export interface State {
  photoGallery: PhotoGalleryState
}

export default combineReducers({
  photoGallery,
})
