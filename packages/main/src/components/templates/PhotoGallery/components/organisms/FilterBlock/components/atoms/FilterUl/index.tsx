// import node_modules
import styled from "styled-components"

// import others
import { Transition } from "@@/shared/const/styles/Transition"
import { Color } from "@@/shared/const/styles/Color"

// main
const { DURATION, TIMING_FUNCTION } = Transition
const { COLOR_FFFFFF } = Color

export type FilterUlProps = {
  isOpen: boolean
}

const getMaxHeight = ({ isOpen }: FilterUlProps) => (isOpen ? "200px" : "0")
const getPadding = ({ isOpen }: FilterUlProps) => (isOpen ? "8px" : "0")
const getOpacity = ({ isOpen }: FilterUlProps) => (isOpen ? 1 : 0)

export const FilterUl = styled.ul<FilterUlProps>`
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
