// import node_modules
import React, { FC } from "react"
import styled from "styled-components"
// import Link from "next/link"
/**
 * Link が使えない問題は以下の issue で議論されている
 * https://github.com/vercel/next.js/issues/16864
 * https://github.com/vercel/next.js/issues/19825
 */
import { rgba } from "polished"

// import others
import { MenuChildProps } from "../../../types"
import { Color, Transition, Margin, Font } from "../../../../../../const"

// main
const { PRIMARY, PRIMARY_TEXT } = Color
const { MARGIN10, MARGIN15 } = Margin
const {
  SIZE: { MIDDLE },
} = Font

export const MenuChild: FC<MenuChildProps> = (props) => {
  const { childLabel, href } = props

  return (
    <li>
      <StyledAnchor href={href}>{childLabel}</StyledAnchor>
    </li>
  )
}

const StyledAnchor = styled.a`
  color: ${PRIMARY_TEXT};
  display: block;
  font-size: ${MIDDLE};
  padding: ${MARGIN15}px ${MARGIN10}px;
  position: relative;
  text-decoration: none;
  word-break: break-word;
  z-index: 20;

  &::after {
    background-color: ${rgba(PRIMARY, 0.1)};
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    position: absolute;
    top: 0;
    transition: width ${Transition.DURATION} ${Transition.TIMING_FUNCTION};
    width: 0;
    z-index: 10;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`
