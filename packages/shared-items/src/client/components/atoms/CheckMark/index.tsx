// import node_modules
import styled from "styled-components"

// import others
import { Transition } from "../../../const"
import { CheckMarkProps } from "./types"
import { getColors } from "./modules/getColors"
import { lineStyles } from "./modules/lineStyles"

// main
const { DURATION, TIMING_FUNCTION } = Transition
const SIZE = 20
export const CheckMark = styled.i<CheckMarkProps>`
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: ${SIZE}px;
  padding: 8px;
  position: relative;
  transition: opacity ${DURATION} ${TIMING_FUNCTION},
    background-color ${DURATION} ${TIMING_FUNCTION};
  width: ${SIZE}px;

  &:hover {
    opacity: 0.8;
  }

  ${getColors};
  ${lineStyles};
`
