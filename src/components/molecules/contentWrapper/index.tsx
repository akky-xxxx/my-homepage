/**
 * import node_modules
 */
import React, { FC } from "react"
import styled from "styled-components"

/**
 * main
 */
const ContentWrapper: FC = (props) => {
  const { children } = props

  return <StyledContentWrapper>{children}</StyledContentWrapper>
}

const StyledContentWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  position: relative;
  width: 100vw;
`

export default ContentWrapper
