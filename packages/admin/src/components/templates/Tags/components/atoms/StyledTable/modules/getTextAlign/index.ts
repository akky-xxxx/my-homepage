// import
import { CellProps } from "../../types"

// main
type GetTextAlign = (args: CellProps) => CellProps["textAlign"]
export const getTextAlign: GetTextAlign = (args) => {
  const { textAlign } = args
  return textAlign ?? "left"
}
