// import node_modules
import { createGlobalStyle } from "styled-components"

// import css
import { reset } from "@@/styles/GlobalStyle/css/reset"
import { common } from "@@/styles/GlobalStyle/css/common"

// main
export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${common}
`
