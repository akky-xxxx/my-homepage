/**
 * import node_modules
 */
import React, { FC } from "react"
import styled from "styled-components"

/**
 * import others
 */
import { APP_BREAKPOINTS, APP_MARGINS } from "../../../shared/const/styles"

/**
 * main
 */
const MainContentWrapper: FC = props => {
  const { children } = props

  return <StyledMainContentWrapper>{children}</StyledMainContentWrapper>
}

const StyledMainContentWrapper = styled.div`
  ${APP_BREAKPOINTS.PC} {
    padding-bottom: ${APP_MARGINS.PC.VERTICAL}px;
    padding-left: ${APP_MARGINS.PC.HORIZON}px;
    padding-right: ${APP_MARGINS.PC.HORIZON}px;
  }

  ${APP_BREAKPOINTS.SP} {
    padding-bottom: ${APP_MARGINS.SP.VERTICAL}px;
    padding-left: ${APP_MARGINS.SP.HORIZON}px;
    padding-right: ${APP_MARGINS.SP.HORIZON}px;
  }
`

export default MainContentWrapper
