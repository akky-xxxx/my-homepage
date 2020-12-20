// import node_modules
import { css } from "styled-components"

// import others
import { InnerProps } from "../../types"

// main
export const getTransform = (args: InnerProps) => {
  const { isChecked } = args
  const rotate = isChecked ? 45 : 0
  const x = isChecked ? -6 : 0
  const y = isChecked ? -3 : 0
  return css`
    transform: rotate(${rotate}deg) translate(${x}px, ${y}px);
  `
}
