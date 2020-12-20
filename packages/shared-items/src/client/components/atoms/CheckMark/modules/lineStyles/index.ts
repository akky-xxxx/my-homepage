// import node_modules
import { css } from "styled-components"

// import others
import { CheckMarkProps } from "../../types"
import { Color, Transition } from "../../../../../const"

// main
const { DURATION, TIMING_FUNCTION } = Transition
const { COLOR_FFFFFF } = Color
export const lineStyles = (args: CheckMarkProps) => {
  const { isChecked } = args
  const beforeWidth = isChecked ? 6 : 13
  const beforeRotate = isChecked ? 45 : 0
  const beforeRight = isChecked ? 7 : 0
  const afterWidth = isChecked ? 10 : 13
  const afterRotate = isChecked ? -45 : 0
  const afterLeft = isChecked ? 4 : 0

  return css`
    &::before,
    &::after {
      background-color: ${COLOR_FFFFFF};
      bottom: 0;
      content: "";
      height: 2px;
      left: 0;
      margin: auto;
      position: absolute;
      right: 0;
      top: 0;
      transition: all ${DURATION} ${TIMING_FUNCTION};
    }

    &::before {
      right: ${beforeRight}px;
      transform: rotate(${beforeRotate}deg);
      width: ${beforeWidth}px;
    }

    &::after {
      left: ${afterLeft}px;
      transform: rotate(${afterRotate}deg);
      width: ${afterWidth}px;
    }
  `
}
