// import node_modules
import styled from "styled-components"
import { rgba } from "polished"

// import others
import { Color, Transition } from "../../../const"
import { BackgroundProps } from "./types"
import { opacity, pointerEvents } from "../../../utils"

// main
const { COLOR_212121 } = Color

export const Background = styled.div<BackgroundProps>`
  background-color: ${rgba(COLOR_212121, 0.3)};
  bottom: 0;
  display: grid;
  left: 0;
  ${opacity};
  place-items: center;
  ${pointerEvents};
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity ${Transition.DURATION} ${Transition.TIMING_FUNCTION};
  z-index: 100;
`
