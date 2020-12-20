// import node_modules
import styled from "styled-components"

// import others
import { InnerProps } from "../../types"
import { SIZE } from "../../const"
import { getTransform } from "../../modules/getTransform"
import { getRadius } from "../../modules/getRadius"
import { getBeforeColor } from "../../modules/getBeforeColor"
import { getAfterColor } from "../../modules/getAfterColor"
import { Color, Transition } from "../../../../../const"

// main
const { DURATION, TIMING_FUNCTION } = Transition
const { DIVIDER } = Color

export const Inner = styled.div<InnerProps>`
  height: ${SIZE}px;
  overflow: hidden;
  ${getTransform};
  position: relative;
  transition: transform ${DURATION} ${TIMING_FUNCTION};
  width: ${SIZE}px;

  &::before,
  &::after {
    border-color: ${DIVIDER};
    ${getRadius};
    border-width: 2px;
    content: "";
    display: inline-block;
    height: ${SIZE}px;
    position: absolute;
    transition: border-color ${DURATION} ${TIMING_FUNCTION},
      border-radius ${DURATION} ${TIMING_FUNCTION};
    width: ${SIZE}px;
  }

  &::before {
    ${getBeforeColor};
    border-left-style: solid;
    border-top-style: solid;
  }

  &::after {
    ${getAfterColor};
    border-bottom-style: solid;
    border-right-style: solid;
  }
`
