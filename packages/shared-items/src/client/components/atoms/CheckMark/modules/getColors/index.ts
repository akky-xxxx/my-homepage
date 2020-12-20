// import node_modules
import { css, FlattenSimpleInterpolation } from "styled-components"

// import others
import { Color } from "../../../../../const/styles/Color"
import { CheckMarkProps } from "../../types"

// main
const { COLOR_2ECC71, COLOR_757575 } = Color
type GetColors = (args: CheckMarkProps) => FlattenSimpleInterpolation
export const getColors: GetColors = (args) => {
  const { isChecked } = args
  const thisColor = isChecked ? COLOR_2ECC71 : COLOR_757575

  return css`
    background-color: ${thisColor};
  `
}
