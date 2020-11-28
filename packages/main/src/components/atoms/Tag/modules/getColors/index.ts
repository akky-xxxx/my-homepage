// import node_modules
import { css, FlattenSimpleInterpolation } from "styled-components"

// import others
import { Color } from "@@/shared/const/styles/Color"
import { TagProps } from "@@/components/atoms/Tag/types"

// main
const { PRIMARY, SECONDARY, ACCENT, COLOR_212121, COLOR_FEFEFE } = Color
type GetColors = (args: TagProps) => FlattenSimpleInterpolation
export const getColors: GetColors = (args) => {
  const { colorType, isActive } = args
  let thisColor: string = COLOR_212121

  if (colorType === "primary") thisColor = PRIMARY
  if (colorType === "secondary") thisColor = SECONDARY
  if (colorType === "accent") thisColor = ACCENT

  if (isActive) {
    return css`
      background-color: ${thisColor};
      border: 1px solid ${thisColor};
      color: ${COLOR_FEFEFE};
    `
  }

  return css`
    border: 1px solid ${thisColor};
    color: ${thisColor};

    &:hover {
      background-color: ${thisColor};
    }
  `
}
