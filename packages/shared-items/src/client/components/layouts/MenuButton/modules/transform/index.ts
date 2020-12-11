// import node_modules
import { css } from "styled-components"

// import others
import { IconBarProps } from "../../types"
import { Transition } from "../../../../../const"

// main
const { TIMING_FUNCTION } = Transition
const DURATION = "0.15s"

export const transform = (args: IconBarProps) => {
  const { isOpen } = args

  return isOpen
    ? css`
        transition: transform ${DURATION} ${DURATION} ${TIMING_FUNCTION},
          top ${DURATION} ${TIMING_FUNCTION},
          opacity ${DURATION} ${DURATION} ${TIMING_FUNCTION};
      `
    : css`
        transition: transform ${DURATION} ${TIMING_FUNCTION},
          top ${DURATION} ${DURATION} ${TIMING_FUNCTION},
          opacity ${DURATION} ${TIMING_FUNCTION};
      `
}
