// import node_modules
import { css } from "styled-components"

// main
type Arg = {
  isShow?: boolean
}
export const pointerEvents = (args: Arg) => {
  const { isShow } = args
  const pointerEventsValue = isShow ? "auto" : "none"
  return css`
    pointer-events: ${pointerEventsValue};
  `
}
