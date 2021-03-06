// import node_modules
import styled, { css } from "styled-components"
import { rgba } from "polished"
import { Color, Margin } from "shared-items/dist/client"

// import others
import { CellProps } from "./types"
import { getTextAlign } from "./modules/getTextAlign"

// main
const { DIVIDER, PRIMARY, SECONDARY, BACKGROUND } = Color
const { MARGIN10 } = Margin

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`

export const StyledTr = styled.tr`
  &:hover {
    background-color: ${rgba(SECONDARY, 0.05)};
  }
`

const cellCommonStyle = css`
  padding: ${MARGIN10}px;
  text-align: ${getTextAlign} !important;
  vertical-align: middle;
`

export const StyledTh = styled.th<CellProps>`
  background-color: ${PRIMARY};
  color: ${BACKGROUND};
  font-weight: normal;
  ${cellCommonStyle};
`

export const StyledTd = styled.td<CellProps>`
  border-bottom: 1px solid ${DIVIDER};
  border-top: 1px solid ${DIVIDER};
  ${cellCommonStyle};
`
