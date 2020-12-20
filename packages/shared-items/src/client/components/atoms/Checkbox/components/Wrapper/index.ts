// import node_modules
import styled from "styled-components"

// import others
import { SIZE } from "../../const"

// main
export const Wrapper = styled.label`
  cursor: pointer;
  display: inline-block;
  height: ${SIZE}px;
  overflow: hidden;
  position: relative;
  vertical-align: text-top;
  width: ${SIZE}px;

  & input {
    height: ${SIZE}px;
    opacity: 0;
    position: absolute;
    width: ${SIZE}px;
  }
`
