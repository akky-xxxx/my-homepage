/**
 * import node_modules
 */
import styled from "styled-components"
import { createMuiTheme } from "@material-ui/core"

/**
 * import others
 */
import { APP_BREAKPOINTS } from "../../../../../shared/const/styles"

/**
 * main
 */
const { spacing } = createMuiTheme()

const HorizonCardWrapper = styled.div`
  ${APP_BREAKPOINTS.PC} {
    display: flex;
    margin-bottom: ${spacing(3)}px;
    margin-top: ${spacing(3)}px;
  }

  ${APP_BREAKPOINTS.SP} {
    margin-bottom: ${spacing(2)}px;
    margin-top: ${spacing(2)}px;
  }
`

export default HorizonCardWrapper
