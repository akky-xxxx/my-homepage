/**
 * import node_modules
 */
import React, { FC, memo } from "react"
import { Card, CardContent, CardHeader, createMuiTheme, Icon } from "@material-ui/core"
import { EventSharp } from "@material-ui/icons"
import styled from "styled-components"

/**
 * import components
 */
import MonthlyChart from "../monthlyChart"
import ChartWrapper from "../chartWrapper"

/**
 * import others
 */
import { APP_BREAKPOINTS } from "../../../../../shared/const/styles"
import { IsNoReRender } from "../../../../../shared/types/common"

/**
 * main
 */
interface MonthlyCardProps {
  startMonth: number
  endMonth: number
  isIgnoreBlank: boolean
}

const { spacing } = createMuiTheme()

const MonthlyCard: FC<MonthlyCardProps> = (props) => {
  const { startMonth, endMonth, isIgnoreBlank } = props

  return (
    <StyledCard>
      <CardHeader avatar={<MonthlyIcon />} title="月別" />
      <CardContent>
        <ChartWrapper isFitWidth>
          <MonthlyChart startMonth={startMonth} endMonth={endMonth} isIgnoreBlank={isIgnoreBlank} />
        </ChartWrapper>
      </CardContent>
    </StyledCard>
  )
}

const MonthlyIcon = () => (
  <Icon color="action">
    <EventSharp />
  </Icon>
)

const StyledCard = styled(Card)`
  ${APP_BREAKPOINTS.PC} {
    flex-grow: 1;
    margin-right: ${spacing(3)}px;
  }

  ${APP_BREAKPOINTS.SP} {
    margin-bottom: ${spacing(2)}px;
    width: 100%;
  }
`
const isNoReRender: IsNoReRender<MonthlyCardProps> = (beforeProps, afterProps) =>
  beforeProps.startMonth === afterProps.startMonth && beforeProps.endMonth === afterProps.endMonth

export default memo(MonthlyCard, isNoReRender)
