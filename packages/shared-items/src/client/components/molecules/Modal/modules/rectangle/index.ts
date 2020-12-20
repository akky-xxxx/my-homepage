// import
import { ModalWrapperProps } from "../../types"
import { getUnitStringValue } from "./modules/getUnitStringValue"

// main
type Rectangle = (args: ModalWrapperProps) => string
export const rectangle: Rectangle = (args) => {
  const { width: _width, height: _height } = args
  const width = getUnitStringValue(_width)
  const height = getUnitStringValue(_height)
  return `
    height: ${height};
    width: ${width};
  `
}
