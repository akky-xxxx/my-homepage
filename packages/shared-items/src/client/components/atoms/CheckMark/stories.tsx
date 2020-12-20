// import node_modules
import React, { PropsWithChildren } from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { CheckMark } from "./index"
import { CheckMarkProps } from "./types"

// main
const config: Meta = {
  title: "atoms/CheckMark",
  component: CheckMark,
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
}
export default config

const Template: Story<PropsWithChildren<CheckMarkProps>> = (props) => (
  <CheckMark {...props} />
)

export const Checked = Template.bind({})
Checked.args = {
  isChecked: true,
}

export const NotChecked = Template.bind({})
NotChecked.args = {
  isChecked: false,
}
