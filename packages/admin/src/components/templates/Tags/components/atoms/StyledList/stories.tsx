// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { StyledList, StyledListItem } from "./index"

// main
const config: Meta = {
  title: "templates/Tags/atoms/StyledList",
  component: StyledList,
}
export default config

export const Default: Story = () => (
  <StyledList>
    <StyledListItem>レコード1</StyledListItem>
    <StyledListItem>レコード2</StyledListItem>
  </StyledList>
)
