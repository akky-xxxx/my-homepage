// import node_modules
import styled from "styled-components"

// import others
import { Color } from "../../../const"

// main
const { DIVIDER } = Color

export const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid ${DIVIDER};
`
