// import
import { ButtonProps } from "../../types"
import { Font } from "../../../../../const/styles/Font"

// main
const {
  SIZE: { LARGE, MIDDLE, SMALL },
} = Font
type GetFontSize = (args: ButtonProps) => string
export const getFontSize: GetFontSize = (args) => {
  const { size } = args

  if (size === "large") return LARGE
  if (size === "small") return SMALL
  return MIDDLE
}
