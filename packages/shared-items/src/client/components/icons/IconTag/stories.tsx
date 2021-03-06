// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { IconTag } from "./index"
import { IconTagProps } from "./types"

// main
const config: Meta<IconTagProps> = {
  title: "icons/IconTag",
  component: IconTag,
}
export default config

const Template: Story<IconTagProps> = (props) => <IconTag {...props} />

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
