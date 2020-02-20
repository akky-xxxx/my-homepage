/**
 * import node_modules
 */
import { Action } from "redux-actions"
import { HandleAction } from "../../../../../shared/types/common"

/**
 * main
 */
// state
export type State = string[]

// payload
export interface SelectViewTagPayload {
  targetTag: string
}

// handle actions
export type HandleSelectViewTag = (payload: SelectViewTagPayload) => Action<SelectViewTagPayload>

export interface HandleActions {
  handleSelectViewTag: HandleSelectViewTag
  handleResetViewTag: HandleAction
}
