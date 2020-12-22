// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { Heading2 } from "./index"

// main
const config: Meta = {
  title: "atoms/Heading2",
  component: Heading2,
}
export default config

export const Default: Story = () => <Heading2>Heading2 Text</Heading2>
