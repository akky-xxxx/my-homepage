// import node_modules
import { css } from "styled-components"

// import others
import { InnerProps } from "../../types"

// main
export const getBeforeColor = (args: InnerProps) => {
  const { isChecked } = args
  if (!isChecked) return undefined
  return css`
    border-left-color: transparent;
    border-top-color: transparent;
  `
}
