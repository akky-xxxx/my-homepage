// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { IconClose } from "./index"
import { IconCloseProps } from "./types"

// main
const config: Meta<IconCloseProps> = {
  title: "icons/IconClose",
  component: IconClose,
}
export default config

const Template: Story<IconCloseProps> = (props) => <IconClose {...props} />

export const Default = Template.bind({})
export const Middle = Template.bind({})
Middle.args = {
  size: "middle",
}
export const Large = Template.bind({})
Large.args = {
  size: "large",
}
export const Small = Template.bind({})
Small.args = {
  size: "small",
}
