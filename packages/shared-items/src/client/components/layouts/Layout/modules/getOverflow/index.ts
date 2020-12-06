// import
import { LayoutProps } from "../../types"

// main
export const getOverflow = (args: Pick<LayoutProps, "isShow">) => {
  const { isShow } = args

  return isShow ? "hidden" : "auto"
}
