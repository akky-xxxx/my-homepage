// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { Tags } from "./index"

// main
const config: Meta = {
  title: "templates/Tags",
  component: Tags,
}
export default config

export const Default: Story = () => <Tags />
