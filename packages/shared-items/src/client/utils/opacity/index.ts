// import node_modules
import { css } from "styled-components"

// main
type Arg = {
  isShow?: boolean
}
export const opacity = (args: Arg) => {
  const { isShow } = args
  const opacityValue = isShow ? 1 : 0
  return css`
    opacity: ${opacityValue};
  `
}
