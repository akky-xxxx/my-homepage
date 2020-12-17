// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { Checkbox } from "./index"
import { CheckboxProps } from "./types"

// main
const config: Meta = {
  title: "atoms/Checkbox",
  component: Checkbox,
  args: {
    isChecked: false,
  },
  argTypes: {
    handleChange: {
      action: "changed",
    },
  },
}
export default config

const Template: Story<CheckboxProps> = (props) => <Checkbox {...props} />

export const Default = Template.bind({})

export const Checked = Template.bind({})
Checked.args = {
  isChecked: true,
}
