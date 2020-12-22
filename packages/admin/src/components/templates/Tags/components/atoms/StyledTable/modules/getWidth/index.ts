// import
import { CellProps } from "../../types"

// main
const unitRegExp = /\d+(px|%)/
type GetWidth = (args: CellProps) => string
export const getWidth: GetWidth = (args) => {
  const { width } = args
  if (typeof width === "undefined") return "auto"
  if (typeof width === "number") return `${width}px`
  return !unitRegExp.test(width) ? "auto" : width
}
