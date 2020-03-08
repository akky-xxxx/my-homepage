/**
 * import node_modules
 */
import React, { FC } from "react"
import { ResponsiveContainer, LineChart, Line, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"
import { createMuiTheme } from "@material-ui/core"

/**
 * import others
 */
import getMonthlyData from "./getMonthlyData"

/**
 * main
 */
interface MonthlyChartProps {
  startMonth: number
  endMonth: number
  isIgnoreBlank: boolean
}

const {
  palette: {
    primary: { main: mainColor },
  },
} = createMuiTheme()

const MonthlyChart: FC<MonthlyChartProps> = props => {
  const { startMonth, endMonth, isIgnoreBlank } = props

  return (
    <ResponsiveContainer id="LineChart">
      <LineChart data={getMonthlyData(startMonth, endMonth, isIgnoreBlank)}>
        <CartesianGrid />
        <Tooltip formatter={value => [`${value} 枚`, "枚数"]} />
        <XAxis dataKey="date" />
        <YAxis type="number" />
        <Line dataKey="count" fill={mainColor} stroke={mainColor} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default MonthlyChart
