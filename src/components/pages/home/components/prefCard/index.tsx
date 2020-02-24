/**
 * import node_modules
 */
import React, { FC, memo } from "react"
import { Card, CardContent, CardHeader, Icon } from "@material-ui/core"
import { RoomSharp } from "@material-ui/icons"
import styled from "styled-components"

/**
 * import components
 */
import PrefChart from "../prefChart"
import ChartWrapper from "../chartWrapper"

/**
 * import others
 */
import { APP_BREAKPOINTS } from "../../../../../shared/const/styles"
import { IsNoReRender } from "../../../../../shared/types/common"

/**
 * main
 */
interface PrefCardProps {
  startMonth: number
  endMonth: number
}

const PrefCard: FC<PrefCardProps> = props => {
  const { startMonth, endMonth } = props

  return (
    <StyledCard>
      <CardHeader avatar={<PrefIcon />} title="都道府県別" />
      <CardContent>
        <ChartWrapper>
          <PrefChart startMonth={startMonth} endMonth={endMonth} />
        </ChartWrapper>
      </CardContent>
    </StyledCard>
  )
}

const PrefIcon = () => (
  <Icon color="action">
    <RoomSharp />
  </Icon>
)

const StyledCard = styled(Card)`
  ${APP_BREAKPOINTS.PC} {
    flex-shrink: 0;
  }

  ${APP_BREAKPOINTS.SP} {
    width: 100%;
  }
`

const isNoReRender: IsNoReRender<PrefCardProps> = (beforeProps, afterProps) =>
  beforeProps.startMonth === afterProps.startMonth && beforeProps.endMonth === afterProps.endMonth

export default memo(PrefCard, isNoReRender)
