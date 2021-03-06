// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { IconCalendar } from "./index"
import { IconCalendarProps } from "./types"

// main
const config: Meta<IconCalendarProps> = {
  title: "icons/IconCalendar",
  component: IconCalendar,
}
export default config

const Template: Story<IconCalendarProps> = (props) => (
  <IconCalendar {...props} />
)

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
