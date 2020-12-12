// import node_modules
import { configureStore, AnyAction } from "@reduxjs/toolkit"
import { createSelectorHook, createDispatchHook } from "react-redux"
import { MakeStore, createWrapper } from "next-redux-wrapper"
import { Common } from "@@/shared/const/Common"

// import others
import {
  reducer,
  actions as actionsOrigins,
  initialState,
  State,
} from "./modules"
import { middleware } from "./middleware"

// main
const { IS_DEV } = Common

export type RootState = State
const store = configureStore<RootState, AnyAction, typeof middleware>({
  reducer,
  middleware,
})
export const useSelector = createSelectorHook<RootState>()
export const useDispatch = createDispatchHook<typeof store.dispatch>()
export const actions = actionsOrigins
export const rootInitialState = initialState

export const makeStore: MakeStore<RootState> = () => store
export const wrapper = createWrapper<RootState>(makeStore, { debug: IS_DEV })
