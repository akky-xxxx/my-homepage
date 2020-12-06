// import node_modules
import styled from "styled-components"
import { rgba } from "polished"

// import others
import { LayoutConst } from "../const"
import { Color, Transition } from "../../../const"
import { BackgroundProps } from "./types"
import { getRight } from "./modules/getRight"

// main
const { COLOR_212121 } = Color
const {
  HEADER_HEIGHT,
  Z_INDEX: { BACKGROUND },
} = LayoutConst

export const Background = styled.div<BackgroundProps>`
  background-color: ${rgba(COLOR_212121, 0.3)};
  bottom: 0;
  left: 0;
  position: fixed;
  right: ${getRight};
  top: ${HEADER_HEIGHT}px;
  transition: right ${Transition.DURATION} ${Transition.TIMING_FUNCTION};
  z-index: ${BACKGROUND};
`
