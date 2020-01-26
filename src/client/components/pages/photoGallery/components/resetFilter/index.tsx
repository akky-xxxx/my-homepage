/**
 * import node_modules
 */
import React, { FC } from "react"
import { Button } from "@material-ui/core"
import styled from "styled-components"

/**
 * main
 */
interface ResetFilterProps {
  handleResetFilter: () => void
}

const ResetFilter: FC<ResetFilterProps> = props => {
  const { handleResetFilter } = props

  return (
    <div>
      <StyledButton variant="contained" color="secondary" onClick={handleResetFilter}>
        リセット
      </StyledButton>
    </div>
  )
}

const StyledButton = styled(Button)`
  width: 100%;
`

export default ResetFilter
