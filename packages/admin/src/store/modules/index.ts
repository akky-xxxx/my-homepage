// import node_modules
import { combineReducers, AnyAction } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

// import others
import {
  sampleReducer,
  sampleActions,
  initialState as sampleInitialState,
} from "./sample"

// main
export const initialState = {
  sample: sampleInitialState,
} as const

const combineReducer = combineReducers({
  sample: sampleReducer,
})

export type State = ReturnType<typeof combineReducer>
type Reducer = (state: State | undefined, action: AnyAction) => State

export const reducer: Reducer = (state = initialState, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  }
  return combineReducer(state, action)
}

export const actions = {
  sample: sampleActions,
}
