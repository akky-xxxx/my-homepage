// import node_modules
import React, { memo, FC } from "react"
import styled from "styled-components"

// import others
import { IconMapProps } from "./types"
import { useIconMap } from "./modules/useIconMap"
import { Transition } from "../../../const"

// main
export const IconMap: FC<IconMapProps> = memo((props) => {
  const { size, handleClick } = useIconMap(props)

  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 8.4666665 8.4666669"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <g id="layer1" transform="translate(0,-288.53332)">
        <path
          d="m 15.996094,0.99609375 c -6.0632836,0 -10.9980445,4.93673065 -10.9980471,11.00000025 -3.8e-6,10.668737 10.3789061,18.779297 10.3789061,18.779297 0.364612,0.290384 0.881482,0.290384 1.246094,0 0,0 10.380882,-8.11056 10.380859,-18.779297 C 27.003893,5.9328244 22.059377,0.99609375 15.996094,0.99609375 Z m 0,6.00195315 c 2.749573,0 5.00585,2.2484784 5.005859,4.9980471 C 21.001971,14.7457 18.745685,17 15.996094,17 c -2.749591,0 -4.998064,-2.2543 -4.998047,-5.003906 9e-6,-2.7495687 2.248474,-4.9980471 4.998047,-4.9980471 z"
          transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"
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
