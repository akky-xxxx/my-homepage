// import node_modules
import React, { FC, ReactNode } from "react"
import styled from "styled-components"

// import others
import { Color, Margin } from "../../../../../../const"

// main
const { DIVIDER } = Color
const { MARGIN10 } = Margin

export type ModalHeaderProps = {
  hasHeader?: boolean
  title?: ReactNode
}

export const ModalHeader: FC<ModalHeaderProps> = (props) => {
  const { hasHeader, title } = props

  if (!hasHeader) return null

  return (
    <Wrapper>
      <TitleWrapper>{title ?? ""}</TitleWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  border-bottom: 1px solid ${DIVIDER};
  flex-shrink: 0;
  margin-bottom: ${MARGIN10}px;
  padding: 0 ${MARGIN10}px ${MARGIN10}px;
  word-break: break-word;
`

const TitleWrapper = styled.h2`
  min-height: 24px;
`
