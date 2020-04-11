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
type DateType = string | null
export type State = [DateType, DateType]

// payload
export interface SelectViewPrefPayload {
  selectedDate: State
}

// handle actions
export type HandleSelectViewDate = (payload: SelectViewPrefPayload) => Action<SelectViewPrefPayload>

export interface HandleActions {
  handleSelectViewDate: HandleSelectViewDate
  handleResetViewDate: HandleAction
}
