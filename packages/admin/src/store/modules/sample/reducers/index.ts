// import reducers
import { increment } from "./increment"
import { decrement } from "./decrement"

// main
export const reducers = {
  increment,
  decrement,
}

export type CaseReducers = typeof reducers
