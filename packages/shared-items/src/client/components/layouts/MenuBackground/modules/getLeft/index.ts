// import
import { MenuBackgroundProps } from "../../types"

// main
export const getLeft = (args: MenuBackgroundProps) => {
  const { isShow, width } = args
  return isShow ? "0" : `${width * -1}px`
}
