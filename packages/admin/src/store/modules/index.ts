// import node_modules
import { combineReducers, AnyAction } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

// import others
import {
  sampleReducer,
  sampleActions,
  initialState as sampleInitialState,
} from "./sample"
import { serverInitialState, serverReducer, serverActions } from "./server"

// main
export const initialState = {
  sample: sampleInitialState,
  server: serverInitialState,
} as const

const combineReducer = combineReducers({
  sample: sampleReducer,
  server: serverReducer,
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
  server: serverActions,
} as const
