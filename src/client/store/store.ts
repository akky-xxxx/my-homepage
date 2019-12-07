/**
 * import node_modules
 */
import { createStore, compose } from "redux"

/**
 * import others
 */
import reducer, { State } from "./modules"

/**
 * main
 */
const isServer = typeof window !== "undefined"

export type StoreState = State

export function initializeStore<State>(initialState: State) {
  const composeEnhancers = (isServer && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const enhancer = composeEnhancers()

  return createStore(
    reducer,
    {
      ...initialState,
    },
    enhancer,
  )
}
