// import
import { MenuBackgroundProps } from "../../types"

// main
export const getWidth = (args: MenuBackgroundProps) => {
  const { width } = args
  return `${width}px`
}
