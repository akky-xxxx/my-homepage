// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { Divider } from "./index"

// main
const config: Meta = {
  title: "atoms/Divider",
  component: Divider,
}
export default config

const Template: Story = () => (
  <div>
    <p>above block</p>
    <Divider />
    <p>below block</p>
  </div>
)
export const Horizon = Template.bind({})
