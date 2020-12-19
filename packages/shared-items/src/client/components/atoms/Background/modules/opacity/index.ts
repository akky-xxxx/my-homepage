// import node_modules
import { css } from "styled-components"

// import others
import { BackgroundProps } from "../../types"

// main
export const opacity = (args: BackgroundProps) => {
  const { isShow } = args
  const opacityValue = isShow ? 1 : 0
  return css`
    opacity: ${opacityValue};
  `
}
