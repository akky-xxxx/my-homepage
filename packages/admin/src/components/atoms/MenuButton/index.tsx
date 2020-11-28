// import node_modules
import React, { memo, FC } from "react"
import styled from "styled-components"

// import others
import {
  MenuButtonProps,
  StyledSvgProps,
} from "@@/components/atoms/MenuButton/types"
import { useMenuButton } from "@@/components/atoms/MenuButton/modules/useMenuButton"
import { getRotate } from "@@/components/atoms/MenuButton/modules/getRotate"
import { Transition } from "@@/shared/const/styles/Transition"

// main
export const MenuButton: FC<MenuButtonProps> = memo((props) => {
  const { handleClick, isOpen } = useMenuButton(props)

  return (
    <StyledButton type="button">
      <StyledSvg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClick}
        isOpen={isOpen}
      >
        <g>
          <path
            d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
            fill="currentColor"
          />
        </g>
      </StyledSvg>
    </StyledButton>
  )
})

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  height: 32px;
  padding: 0;
  width: 32px;
`

const StyledSvg = styled.svg<StyledSvgProps>`
  cursor: pointer;
  transform: rotate(${getRotate}deg);
  transition: opacity ${Transition.DURATION} ${Transition.TIMING_FUNCTION},
    transform ${Transition.DURATION} ${Transition.TIMING_FUNCTION};

  &:hover {
    opacity: 0.5;
  }
`
