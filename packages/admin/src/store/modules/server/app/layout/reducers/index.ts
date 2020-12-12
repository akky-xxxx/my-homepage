// import reducers
import { openMenu } from "./openMenu"
import { closeMenu } from "./closeMenu"
import { changeTitle } from "./changeTitle"

// main
export const reducers = {
  openMenu,
  closeMenu,
  changeTitle,
} as const

export type CaseReducers = typeof reducers
