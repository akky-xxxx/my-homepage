// import node_modules
import React, { FC } from "react"
import styled from "styled-components"

// import components
import { ModalHeader } from "./components/atoms/ModalHeader"
import { ModalBody } from "./components/atoms/ModalBody"
import { ModalFooter } from "./components/atoms/ModalFooter"

// import others
import { ModalProps } from "./types"
import { Color, Radius, Margin, Transition } from "../../../const"
import { rectangle } from "./modules/rectangle"
import { opacity, pointerEvents } from "../../../utils"

// main
const { COLOR_FFFFFF } = Color
const { SINGLE } = Radius
const { MARGIN10 } = Margin
const { DURATION, TIMING_FUNCTION } = Transition

export const Modal: FC<ModalProps> = (props) => {
  const {
    height,
    width,
    isShow,
    hasHeader,
    title,
    hasFooter,
    hasCancelButton,
    okText,
    cancelText,
    handleOkCallback,
    handleCancelCallback,
    children,
  } = props
  return (
    <ModalWrapper
      height={height}
      width={width}
      isShow={isShow}
      onClick={(event) => event.stopPropagation()}
    >
      <ModalHeader hasHeader={hasHeader} title={title} />
      <ModalBody>{children}</ModalBody>
      <ModalFooter
        hasFooter={hasFooter}
        hasCancelButton={hasCancelButton}
        okText={okText}
        cancelText={cancelText}
        handleOkCallback={handleOkCallback}
        handleCancelCallback={handleCancelCallback}
      />
    </ModalWrapper>
  )
}

const ModalWrapper = styled.main`
  background-color: ${COLOR_FFFFFF};
  border-radius: ${SINGLE};
  display: flex;
  flex-direction: column;
  ${rectangle};
  ${opacity};
  overflow: hidden;
  padding: ${MARGIN10}px 0;
  ${pointerEvents};
  transition: opacity ${DURATION} ${TIMING_FUNCTION};
`
