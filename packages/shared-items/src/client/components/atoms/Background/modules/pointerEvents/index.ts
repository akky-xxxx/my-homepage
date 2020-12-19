// import node_modules
import { css } from "styled-components"

// import others
import { BackgroundProps } from "../../types"

// main
export const pointerEvents = (args: BackgroundProps) => {
  const { isShow } = args
  const pointerEventsValue = isShow ? "auto" : "none"
  return css`
    pointer-events: ${pointerEventsValue};
  `
}
