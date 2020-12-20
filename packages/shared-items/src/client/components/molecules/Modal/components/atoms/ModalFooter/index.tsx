// import node_modules
import React, { FC } from "react"
import styled from "styled-components"

// import components
import { Button } from "../../../../../atoms"

// import others
import { Color, Margin } from "../../../../../../const"
import { EmptyFunction } from "../../../../../../../common"

// main
const { DIVIDER } = Color
const { MARGIN10 } = Margin

export type ModalFooterProps = {
  hasFooter?: boolean
  hasCancelButton?: boolean
  okText?: string
  cancelText?: string
  handleOkCallback: EmptyFunction
  handleCancelCallback?: EmptyFunction
}

export const ModalFooter: FC<ModalFooterProps> = (props) => {
  const {
    hasFooter,
    hasCancelButton,
    okText,
    cancelText,
    handleOkCallback,
    handleCancelCallback,
  } = props

  if (!hasFooter) return null

  return (
    <Wrapper>
      <StyledButton colorType="primary" onClick={handleOkCallback}>
        {okText && okText.length ? okText : "OK"}
      </StyledButton>
      {hasCancelButton && (
        <StyledButton colorType="accent" onClick={handleCancelCallback}>
          {cancelText && cancelText.length ? cancelText : "キャンセル"}
        </StyledButton>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  border-top: 1px solid ${DIVIDER};
  display: flex;
  flex-shrink: 0;
  justify-content: space-evenly;
  margin-top: ${MARGIN10}px;
  padding: ${MARGIN10}px ${MARGIN10}px 0;
  word-break: break-word;
`

const StyledButton = styled(Button)`
  min-width: 120px;
`
