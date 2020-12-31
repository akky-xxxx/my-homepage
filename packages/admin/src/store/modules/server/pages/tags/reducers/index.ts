// import reducers
import { getTags } from "./getTags"

// main
export const reducers = {
  getTags,
} as const

export type CaseReducers = typeof reducers
