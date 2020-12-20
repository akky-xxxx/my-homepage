// import node_modules
import { css } from "styled-components"

// import others
import { InnerProps } from "../../types"
import { Color } from "../../../../../const"

// main
const { COLOR_2ECC71 } = Color
export const getAfterColor = (args: InnerProps) => {
  const { isChecked } = args
  if (!isChecked) return undefined
  return css`
    border-bottom-color: ${COLOR_2ECC71};
    border-right-color: ${COLOR_2ECC71};
  `
}
