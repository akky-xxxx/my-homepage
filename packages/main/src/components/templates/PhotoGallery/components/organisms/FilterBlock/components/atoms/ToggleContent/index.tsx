// import node_modules
import styled from "styled-components"
import { Transition, Color } from "shared-items/dist/client"

// main
const { DURATION, TIMING_FUNCTION } = Transition
const { COLOR_FFFFFF } = Color

export type ToggleContentProps = {
  isOpen: boolean
}

const getMaxHeight = ({ isOpen }: ToggleContentProps) =>
  isOpen ? "200px" : "0"
const getPadding = ({ isOpen }: ToggleContentProps) => (isOpen ? "8px" : "0")
const getOpacity = ({ isOpen }: ToggleContentProps) => (isOpen ? 1 : 0)

export const ToggleContent = styled.div<ToggleContentProps>`
  height: auto;
  max-height: ${getMaxHeight};
  opacity: ${getOpacity};
  overflow: hidden;
  padding: ${getPadding} 8px;
  transition: max-height ${DURATION} ${TIMING_FUNCTION},
    opacity ${DURATION} ${TIMING_FUNCTION},
    padding ${DURATION} ${TIMING_FUNCTION};

  &:nth-child(even) {
    background-color: ${COLOR_FFFFFF};
  }
`
