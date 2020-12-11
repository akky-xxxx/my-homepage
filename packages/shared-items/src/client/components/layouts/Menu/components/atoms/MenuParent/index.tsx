// import node_modules
import React, { FC } from "react"
import styled from "styled-components"
import { rgba } from "polished"

// import components
import { MenuChild } from "../MenuChild"

// import others
import { MenuParentProps } from "../../../types"
import { Color, Margin } from "../../../../../../const"

// main
const { COLOR_212121 } = Color
const { MARGIN10 } = Margin

export const MenuParent: FC<MenuParentProps> = (props) => {
  const { parentLabel, menuChildren } = props

  return (
    <StyledList>
      <StyledParagraph>{parentLabel}</StyledParagraph>
      <ul>
        {menuChildren.map((menuChild) => {
          const { childLabel } = menuChild
          return (
            <MenuChild key={`${parentLabel}-${childLabel}`} {...menuChild} />
          )
        })}
      </ul>
    </StyledList>
  )
}

const StyledList = styled.li`
  & + & {
    margin-top: ${MARGIN10}px;
  }
`

const StyledParagraph = styled.p`
  color: ${rgba(COLOR_212121, 0.6)};
  padding: ${MARGIN10}px;
  word-break: break-word;
`
