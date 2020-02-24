/**
 * import node_modules
 */
import styled from "styled-components"

/**
 * import other
 */
import { APP_BREAKPOINTS } from "../../../../../shared/const/styles"

/**
 * main
 */
interface ChartWrapperProps {
  isFitWidth?: boolean
}

const PIE_SIZE = {
  PC: 300,
  SP: 200,
}

const ChartWrapper = styled.div<ChartWrapperProps>`
  ${APP_BREAKPOINTS.PC} {
    height: ${PIE_SIZE.PC}px;
    width: ${props => (props.isFitWidth ? "100%" : `${PIE_SIZE.PC}px`)};
  }

  ${APP_BREAKPOINTS.SP} {
    height: ${PIE_SIZE.SP}px;
    width: 100%;
  }
`

export default ChartWrapper
