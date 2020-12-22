// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { MainContents } from "./index"

// main
const config: Meta = {
  title: "atoms/MainContents",
  component: MainContents,
}
export default config

export const Default: Story = () => (
  <MainContents>
    {"The max width of main content is 1080px.".repeat(50)}
  </MainContents>
)
