// import node_modules
import styled from "styled-components"
import { rgba } from "polished"
import { Color, Margin } from "shared-items/dist/client"

// main
const { DIVIDER, SECONDARY, BACKGROUND } = Color
const { MARGIN10 } = Margin

export const StyledList = styled.ul`
  width: 100%;
`

export const StyledListItem = styled.li`
  background-color: ${BACKGROUND};
  border-bottom: 1px solid ${DIVIDER};
  padding: ${MARGIN10}px;
  vertical-align: middle;

  &:first-child {
    border-top: 1px solid ${DIVIDER};
  }

  &:hover {
    background-color: ${rgba(SECONDARY, 0.05)};
  }
`
