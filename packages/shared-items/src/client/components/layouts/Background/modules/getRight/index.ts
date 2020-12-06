// import
import { BackgroundProps } from "../../types"

// main
export const getRight = (args: BackgroundProps) => {
  const { isShow } = args
  return isShow ? "0" : "100vw"
}
