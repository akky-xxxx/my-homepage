// import node_modules
import React, { memo, FC } from "react"
import styled from "styled-components"

// import others
import { MenuButtonProps, IconBarProps } from "./types"
import { useMenuButton } from "./modules/useMenuButton"
import { getValueByShowStatus } from "./modules/getValueByShowStatus"
import { Transition } from "../../../const"

// main
export const MenuButton: FC<MenuButtonProps> = memo((props) => {
  const { handleClick, isOpen } = useMenuButton(props)

  return (
    <StyledButton type="button">
      <IconWrapper onClick={handleClick}>
        <IconBar isOpen={isOpen} />
        <IconBar isOpen={isOpen} />
        <IconBar isOpen={isOpen} />
      </IconWrapper>
    </StyledButton>
  )
})

const ICON_WIDTH = 32
const BAR_HEIGHT = 4

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: currentColor;
  height: 32px;
  padding: 0;
  width: 32px;
`

const IconWrapper = styled.div`
  height: ${ICON_WIDTH}px;
  position: relative;
  transition: opacity ${Transition.DURATION} ${Transition.TIMING_FUNCTION};
  width: ${ICON_WIDTH}px;

  &:hover {
    opacity: 0.5;
  }
`

const IconBar = styled.div<IconBarProps>`
  background-color: currentColor;
  border-radius: ${BAR_HEIGHT / 2}px;
  cursor: pointer;
  display: block;
  height: ${BAR_HEIGHT}px;
  position: absolute;
  transform-origin: center;
  transition: transform ${Transition.DURATION} ${Transition.TIMING_FUNCTION},
    top ${Transition.DURATION} ${Transition.TIMING_FUNCTION},
    opacity ${Transition.DURATION} ${Transition.TIMING_FUNCTION};
  width: ${ICON_WIDTH}px;

  &:nth-child(1) {
    top: ${getValueByShowStatus(14, 3)}px;
    transform: rotate(${getValueByShowStatus(45, 0)}deg);
  }

  &:nth-child(2) {
    opacity: ${getValueByShowStatus(0, 1)};
    top: 13px;
  }

  &:nth-child(3) {
    top: ${getValueByShowStatus(14, 25)}px;
    transform: rotate(${getValueByShowStatus(-45, 0)}deg);
  }
`
