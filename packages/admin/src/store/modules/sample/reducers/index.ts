// import reducers
import { increment } from "./increment"
import { decrement } from "./decrement"
import { changeText } from "./changeText"

// main
export const reducers = {
  increment,
  decrement,
  changeText,
} as const

export type CaseReducers = typeof reducers
