// import node_modules
import styled from "styled-components"
import { Color, Radius, Font } from "../../../const"

// main
const { PRIMARY_TEXT, COLOR_CCCCCC } = Color
const { SINGLE } = Radius
const {
  SIZE: { MIDDLE },
} = Font

export const Input = styled.input`
  border: 1px solid ${COLOR_CCCCCC};
  border-radius: ${SINGLE};
  color: ${PRIMARY_TEXT};
  font-size: ${MIDDLE};
  padding: 11px 10px 7px;
`
