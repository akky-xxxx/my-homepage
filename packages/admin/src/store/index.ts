// import node_modules
import { configureStore } from "@reduxjs/toolkit"
import { createSelectorHook, createDispatchHook } from "react-redux"

// import others
import { reducer, actions as actionsOrigins } from "./modules"

// main
export const store = configureStore({ reducer })
export type RootState = ReturnType<typeof reducer>
export const useSelector = createSelectorHook<RootState>()
export const useDispatch = createDispatchHook<typeof store.dispatch>()
export const actions = actionsOrigins
