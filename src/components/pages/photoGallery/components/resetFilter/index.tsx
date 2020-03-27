/**
 * import node_modules
 */
import React, { FC, memo } from "react"
import { Button } from "@material-ui/core"
import styled from "styled-components"

/**
 * import others
 */
import { IsNoReRender } from "../../../../../shared/types/common"

/**
 * main
 */
interface ResetFilterProps {
  isDisable: boolean
  handleResetFilter: () => void
}

const ResetFilter: FC<ResetFilterProps> = (props) => {
  const { isDisable, handleResetFilter } = props

  return (
    <div>
      <StyledButton disabled={isDisable} variant="contained" color="secondary" onClick={handleResetFilter}>
        リセット
      </StyledButton>
    </div>
  )
}

const StyledButton = styled(Button)`
  width: 100%;
`

const isNoReRender: IsNoReRender<ResetFilterProps> = (beforeProps, afterProps) =>
  beforeProps.isDisable === afterProps.isDisable

export default memo(ResetFilter, isNoReRender)
