// import node_modules
import styled from "styled-components"

// import others
import { Radius, Color, Font, Transition } from "../../../const"
import { TagProps } from "./types"
import { getColors } from "./modules/getColors"

// main
const { DURATION, TIMING_FUNCTION } = Transition
const { COLOR_FEFEFE } = Color

export const Tag = styled.span<TagProps>`
  background-color: transparent;
  border-radius: ${Radius.SINGLE};
  cursor: pointer;
  font-size: ${Font.SIZE.SMALL};
  padding: 4px;
  transition: color ${DURATION} ${TIMING_FUNCTION},
    background-color ${DURATION} ${TIMING_FUNCTION};

  &:hover {
    color: ${COLOR_FEFEFE};
  }

  ${getColors}
`
