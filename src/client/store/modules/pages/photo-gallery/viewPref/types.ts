/**
 * import node_modules
 */
import { Action } from "redux-actions"

/**
 * import others
 */
import { HandleAction, PrefCode } from "../../../../../shared/types/common"

/**
 * main
 */
// pref code に `全て` 用の 00 を追加
export type ViewPref = PrefCode | "00"

// state
export type State = ViewPref

// payload
export interface SelectViewPrefPayload {
  targetPref: ViewPref
}

// handle actions
export type HandleSelectViewPref = (payload: SelectViewPrefPayload) => Action<SelectViewPrefPayload>

export interface HandleActions {
  handleSelectViewPref: HandleSelectViewPref
  handleResetViewPref: HandleAction
}
