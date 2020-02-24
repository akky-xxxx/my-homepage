/**
 * import node_modules
 */
import React, { FC, memo } from "react"
import { Card, CardContent, CardHeader, Icon } from "@material-ui/core"
import { LocalOfferSharp } from "@material-ui/icons"

/**
 * import components
 */
import ChartWrapper from "../chartWrapper"
import TagChart from "../tagChart"

/**
 * import others
 */
import { IsNoReRender } from "../../../../../shared/types/common"

/**
 * main
 */
interface TagCardProps {
  startMonth: number
  endMonth: number
}

const TagCard: FC<TagCardProps> = props => {
  const { startMonth, endMonth } = props

  return (
    <Card>
      <CardHeader avatar={<TagIcon />} title="タグ別" />
      <CardContent>
        <ChartWrapper isFitWidth>
          <TagChart startMonth={startMonth} endMonth={endMonth} />
        </ChartWrapper>
      </CardContent>
    </Card>
  )
}

const TagIcon = () => (
  <Icon color="action">
    <LocalOfferSharp />
  </Icon>
)

const isNoReRender: IsNoReRender<TagCardProps> = (beforeProps, afterProps) =>
  beforeProps.startMonth === afterProps.startMonth && beforeProps.endMonth === afterProps.endMonth

export default memo(TagCard, isNoReRender)
