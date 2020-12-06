// import node_modules
import { rgba } from "polished"

// import others
import { MenuBackgroundProps } from "../../types"
import { Color } from "../../../../../const"

// main
const { COLOR_212121 } = Color
export const getBoxShadow = (args: MenuBackgroundProps) => {
  const { isShow } = args
  const opacity = isShow ? 0.3 : 0
  return `0 0 10px ${rgba(COLOR_212121, opacity)}`
}
