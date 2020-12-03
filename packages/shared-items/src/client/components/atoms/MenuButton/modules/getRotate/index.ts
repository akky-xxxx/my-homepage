// import
import { StyledSvgProps } from "@@/client/components/atoms/MenuButton/types"

// main
type getRotate = (args: StyledSvgProps) => number
export const getRotate: getRotate = (args) => {
  const { isOpen } = args
  return isOpen ? 90 : 0
}
