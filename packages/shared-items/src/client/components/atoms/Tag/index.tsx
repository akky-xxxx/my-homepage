// import node_modules
import styled from "styled-components"

// import others
import { Radius } from "@@/client/const/styles/Radius"
import { Color } from "@@/client/const/styles/Color"
import { Font } from "@@/client/const/styles/Font"
import { Transition } from "@@/client/const/styles/Transition"
import { TagProps } from "@@/client/components/atoms/Tag/types"
import { getColors } from "@@/client/components/atoms/Tag/modules/getColors"

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
