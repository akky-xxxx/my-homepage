// import node_modules
import React, { memo, FC } from "react"
import styled from "styled-components"

// import others
import { IconTagProps } from "./types"
import { useIconTag } from "./modules/useIconTag"
import { Transition } from "../../../const"

// main
export const IconTag: FC<IconTagProps> = memo((props) => {
  const { size, handleClick } = useIconTag(props)

  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <g>
        <path
          d="M28.075-0.003L0,28.076L19.927,48l28.076-28.078V0.003L28.075-0.003z M42.672,9.552c-1.166,1.165-3.055,1.165-4.225,0.002  c-1.165-1.169-1.165-3.059-0.002-4.228c1.168-1.166,3.062-1.166,4.227-0.002C43.841,6.496,43.843,8.383,42.672,9.552z"
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
