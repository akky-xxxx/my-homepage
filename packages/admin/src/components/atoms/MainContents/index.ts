// import node_modules
import styled from "styled-components"
import { Margin } from "shared-items/dist/client"

// main
const { MARGIN25 } = Margin
export const MainContents = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${1080 + MARGIN25 * 2}px;
  padding: ${MARGIN25}px;
`
