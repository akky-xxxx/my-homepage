/**
 * import node_modules
 */
import React, { FC } from "react"
import { ResponsiveContainer, PieChart, Tooltip, Pie, Cell } from "recharts"

/**
 * import others
 */
import getPrefData from "./getPrefData"
import PREF_MAP from "../../../../../shared/const/prefMap"
import { PrefCode } from "../../../../../shared/types/common"
import { COLORS } from "../../../../../shared/const/styles"

/**
 * main
 */
interface PrefChartProps {
  startMonth: number
  endMonth: number
}

const PrefChart: FC<PrefChartProps> = (props) => {
  const { startMonth, endMonth } = props
  const prefData = getPrefData(startMonth, endMonth)

  return (
    <ResponsiveContainer id="PrefChart">
      <PieChart>
        <Pie data={prefData} labelLine label fill="#8884d8" dataKey="count">
          {prefData.map((entry, index) => (
            <Cell key={entry.prefCode} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, _name, tooltipProps) => {
            return [value, PREF_MAP[tooltipProps.payload.payload.prefCode as PrefCode]]
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PrefChart
