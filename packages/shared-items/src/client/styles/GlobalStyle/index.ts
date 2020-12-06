// import node_modules
import { createGlobalStyle } from "styled-components"

// import css
import { reset } from "./css/reset"
import { common } from "./css/common"

// main
export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${common}
`
