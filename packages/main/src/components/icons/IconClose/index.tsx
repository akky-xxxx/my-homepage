// import node_modules
import React, { memo, FC } from "react"
import styled from "styled-components"

// import others
import { IconCloseProps } from "@@/components/icons/IconClose/types"
import { useIconClose } from "@@/components/icons/IconClose/modules/useIconClose"
import { Transition } from "@@/shared/const/styles/Transition"

// main
export const IconClose: FC<IconCloseProps> = memo((props) => {
  const { size, handleClick } = useIconClose(props)

  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <g>
        <path
          d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M16.9,15.5l-1.4,1.4L12,13.4l-3.5,3.5   l-1.4-1.4l3.5-3.5L7.1,8.5l1.4-1.4l3.5,3.5l3.5-3.5l1.4,1.4L13.4,12L16.9,15.5z"
          fill="currentColor"
        />
      </g>
    </StyledSvg>
  )
})

const StyledSvg = styled.svg`
  cursor: pointer;
  transition: opacity ${Transition.DURATION} ${Transition.TIMING_FUNCTION};

  &:hover {
    opacity: 0.5;
  }
`
