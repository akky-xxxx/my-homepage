// import node_modules
import styled from "styled-components"

// import others
import { Color, Transition, Margin } from "../../../const"
import { LayoutConst } from "../const"
import { MenuBackgroundProps } from "./types"
import { getWidth } from "./modules/getWidth"
import { getLeft } from "./modules/getLeft"
import { getBoxShadow } from "./modules/getBoxShadow"

// main
const { BACKGROUND } = Color
const { MARGIN10 } = Margin
const {
  HEADER_HEIGHT,
  Z_INDEX: { MENU_BACKGROUND },
} = LayoutConst

export const MenuBackground = styled.div<MenuBackgroundProps>`
  background-color: ${BACKGROUND};
  bottom: 0;
  box-shadow: ${getBoxShadow};
  left: ${getLeft};
  overflow: auto;
  padding: ${MARGIN10}px;
  position: fixed;
  top: ${HEADER_HEIGHT}px;
  transition: width ${Transition.DURATION} ${Transition.TIMING_FUNCTION},
    left ${Transition.DURATION} ${Transition.TIMING_FUNCTION};
  width: ${getWidth};
  z-index: ${MENU_BACKGROUND};
`
