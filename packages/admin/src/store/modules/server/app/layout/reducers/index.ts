// import reducers
import { openMenu } from "./openMenu"
import { closeMenu } from "./closeMenu"

// main
export const reducers = {
  openMenu,
  closeMenu,
} as const

export type CaseReducers = typeof reducers
