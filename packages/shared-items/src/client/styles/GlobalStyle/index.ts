// import node_modules
import { createGlobalStyle } from "styled-components"

// import css
import { reset } from "@@/client/styles/GlobalStyle/css/reset"
import { common } from "@@/client/styles/GlobalStyle/css/common"

// main
export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${common}
`
