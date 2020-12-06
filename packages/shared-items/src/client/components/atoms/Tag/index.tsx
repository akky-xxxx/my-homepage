// import node_modules
import styled from "styled-components"

// import others
import { Radius } from "../../../const/styles/Radius"
import { Color } from "../../../const/styles/Color"
import { Font } from "../../../const/styles/Font"
import { Transition } from "../../../const/styles/Transition"
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
