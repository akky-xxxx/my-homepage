/**
 * import node_modules
 */
import React, { FC } from "react"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { createMuiTheme } from "@material-ui/core"

/**
 * import others
 */
import getTagData from "./getTagData"

/**
 * main
 */
interface TagChartProps {
  startMonth: number
  endMonth: number
}

const {
  palette: {
    primary: { main: mainColor },
  },
} = createMuiTheme()

const TagChart: FC<TagChartProps> = props => {
  const { startMonth, endMonth } = props
  const tagData = getTagData(startMonth, endMonth)
  return (
    <ResponsiveContainer id="TagChart">
      <BarChart data={tagData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={value => [`${value} 枚`, "枚数"]} />
        <Bar dataKey="count" fill={mainColor} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default TagChart
