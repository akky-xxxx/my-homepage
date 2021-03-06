// import node_modules
import styled from "styled-components"
import { rgba } from "polished"
import { Button, Radius, Color } from "shared-items/dist/client"

// main
const { COLOR_FEFEFE, COLOR_212121 } = Color

export const StyledButton = styled(Button)`
  &:first-child {
    border-radius: ${Radius.UNIT_LEFT};
  }

  &:last-child {
    border-radius: ${Radius.UNIT_RIGHT};
  }

  &:not(:last-child) {
    border-right: 1px solid ${rgba(COLOR_212121, 0.1)};
  }

  & + & {
    border-left: 1px solid ${rgba(COLOR_FEFEFE, 0.1)};
  }
`
