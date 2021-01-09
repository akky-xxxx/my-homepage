// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { Input } from "./index"

// main
const config: Meta = {
  title: "atoms/Input",
  component: Input,
}
export default config

export const Default: Story = () => <Input />
