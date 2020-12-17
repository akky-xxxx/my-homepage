// import node_modules
import { css } from "styled-components"

// import others
import { InnerProps } from "../../types"

// main
export const getRadius = (args: InnerProps) => {
  const { isChecked } = args
  const radius = isChecked ? 0 : 2
  return css`
    border-radius: ${radius}px;
  `
}
