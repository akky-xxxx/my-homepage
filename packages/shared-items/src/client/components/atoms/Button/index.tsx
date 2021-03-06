// import node_modules
import styled from "styled-components"

// import others
import { Radius, Color, Transition } from "../../../const"
import { ButtonProps } from "./types"
import { getColors } from "./modules/getColors"
import { getFontSize } from "./modules/getFontSize"

// main
const { DURATION, TIMING_FUNCTION } = Transition
const { COLOR_FEFEFE, COLOR_757575 } = Color

export const Button = styled.button<ButtonProps>`
  border-radius: ${Radius.SINGLE};
  cursor: pointer;
  font-size: ${getFontSize};
  opacity: 1;
  padding: 8px;
  transition: opacity ${DURATION} ${TIMING_FUNCTION};

  &:hover {
    color: ${COLOR_FEFEFE};
    opacity: 0.8;
  }

  &:disabled {
    background-color: ${COLOR_757575};
    border-color: transparent;
    cursor: not-allowed;

    &:hover {
      background-color: ${COLOR_757575};
      opacity: 1;
    }
  }

  ${getColors}
`
