// import
import { ButtonProps } from "@@/components/atoms/Button/types"
import { Font } from "@@/shared/const/styles/Font"

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
