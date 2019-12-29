/**
 * import node_modules
 */
import { Action } from "redux-actions"

/**
 * import others
 */
import galleryInfoList from "../../../../shared/const/galleryInfoList"
import { HandleAction, PrefCode } from "../../../../shared/types/common"

/**
 * main
 */
// pref code に `全て` 用の 00 を追加
export type ViewPref = PrefCode | "00"

// state
export interface State {
  galleryInfoList: typeof galleryInfoList
  isOpen: boolean
  currentImageId: null | number
  selectedViewPref: ViewPref
}

// payload
export interface ImageModalPayload {
  targetId: number
}

export interface SelectViewPrefPayload {
  targetPref: ViewPref
}

// action
export interface ModalAction {
  payload: ImageModalPayload
}

export interface SelectViewAction {
  payload: SelectViewPrefPayload
}

// handle actions
export type HandleOpenModalAction = (payload: ImageModalPayload) => Action<ImageModalPayload>

export type HandleSelectViewPref = (payload: SelectViewPrefPayload) => Action<SelectViewPrefPayload>

export interface HandleActions {
  handleOpenModal: HandleOpenModalAction
  handleCloseModal: HandleAction
  handleSelectViewPref: HandleSelectViewPref
}
