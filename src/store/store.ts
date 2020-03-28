/**
 * import node_modules
 */
import { configureStore } from "@reduxjs/toolkit"

/**
 * import others
 */
import reducer from "./modules"

/**
 * main
 */
export function initializeStore() {
  return configureStore({ reducer })
}

const store = initializeStore
export default store()
