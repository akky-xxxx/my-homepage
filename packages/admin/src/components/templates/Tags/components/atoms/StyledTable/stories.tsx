// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { StyledTable, StyledTr, StyledTh, StyledTd } from "./index"

// main
const config: Meta = {
  title: "templates/Tags/atoms/StyledTable",
  component: StyledTable,
}
export default config

export const Default: Story = () => (
  <StyledTable>
    <thead>
      <tr>
        <StyledTh>見出し1見出し1</StyledTh>
        <StyledTh>見出し2見出し2</StyledTh>
      </tr>

      <tr>
        <StyledTh textAlign="center">見出し1</StyledTh>
        <StyledTh textAlign="right">見出し2</StyledTh>
      </tr>
    </thead>

    <tbody>
      <StyledTr>
        <StyledTd>レコード1レコード1</StyledTd>
        <StyledTd>レコード2レコード2</StyledTd>
      </StyledTr>

      <StyledTr>
        <StyledTd textAlign="center">レコード1</StyledTd>
        <StyledTd textAlign="right">レコード2</StyledTd>
      </StyledTr>
    </tbody>
  </StyledTable>
)
