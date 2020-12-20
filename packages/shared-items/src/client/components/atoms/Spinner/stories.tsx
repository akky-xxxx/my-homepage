// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { Spinner } from "./index"

// main
const config: Meta = {
  title: "atoms/Spinner",
  component: Spinner,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}
export default config

const Template: Story = () => <Spinner />

export const Default = Template.bind({})
