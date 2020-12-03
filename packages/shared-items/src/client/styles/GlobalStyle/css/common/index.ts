// import node_modules
import { css } from "styled-components"

// import others
import { Color } from "@@/client/const/styles/Color"
import { Font } from "@@/client/const/styles/Font"

// main
const { BACKGROUND, PRIMARY_TEXT } = Color
const { SIZE } = Font

export const common = css`
  body {
    background-color: ${BACKGROUND};
    color: ${PRIMARY_TEXT};
    font-size: ${SIZE.MIDDLE};
  }
`
