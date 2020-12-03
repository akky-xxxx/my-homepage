// import node_modules
import React, { memo, FC } from "react"
import styled from "styled-components"

// import others
import { IconCalendarProps } from "@@/client/components/icons/IconCalendar/types"
import { useIconCalendar } from "@@/client/components/icons/IconCalendar/modules/useIconCalendar"
import { Transition } from "@@/client/const/styles/Transition"

// main
export const IconCalendar: FC<IconCalendarProps> = memo((props) => {
  const { size, handleClick } = useIconCalendar(props)

  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="-265 388.9 64 64"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <g>
        <path
          d="M-252.7,443.9h39.4c0.9,0,1.6-0.7,1.6-1.6v-27.6c0-0.2-0.1-0.3-0.3-0.3h-42c-0.2,0-0.3,0.1-0.3,0.3v27.6   C-254.4,443.2-253.6,443.9-252.7,443.9z"
          fill="currentColor"
        />
        <path
          d="M-221.5,402.8v-3.3c0-0.9-0.7-1.6-1.6-1.6h-3.3c-0.9,0-1.6,0.7-1.6,1.6v3.3c0,0.9-0.7,1.6-1.6,1.6h-6.6   c-0.9,0-1.6-0.7-1.6-1.6v-3.3c0-0.9-0.7-1.6-1.6-1.6h-3.3c-0.9,0-1.6,0.7-1.6,1.6v3.3c0,0.9-0.7,1.6-1.6,1.6h-6.6   c-0.9,0-1.6,0.7-1.6,1.6v4.6c0,0.2,0.1,0.3,0.3,0.3h41.8c0.2,0,0.3-0.1,0.3-0.3V406c0-0.9-0.7-1.6-1.6-1.6h-6.6   C-220.8,404.5-221.5,403.7-221.5,402.8z"
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
