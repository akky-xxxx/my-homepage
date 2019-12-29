/**
 * import
 */
import { PrefCode } from "../../../../shared/types/common"
import { State as ModalState, HandleActions as ModalHandleActions } from "./modal/types"
import { State as ViewPrefState, HandleActions as ViewPrefHandleActions } from "./viewPref/types"

/**
 * main
 */
// pref code に `全て` 用の 00 を追加
export type ViewPref = PrefCode | "00"

// state
export interface State {
  modal: ModalState
  selectedViewPref: ViewPrefState
}

// handle actions
export interface HandleActions extends ModalHandleActions, ViewPrefHandleActions {}
