// import node_modules
import React, { PropsWithChildren } from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { Button } from "./index"
import { ButtonProps } from "./types"

// main
const config: Meta = {
  title: "atoms/Button",
  component: Button,
  args: {
    children: "ボタン",
    disabled: false,
  },
}
export default config

const Template: Story<PropsWithChildren<ButtonProps>> = (props) => {
  return <Button {...props} />
}

export const Default = Template.bind({})

export const Primary = Template.bind({})
Primary.args = {
  colorType: "primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  colorType: "secondary",
}

export const Accent = Template.bind({})
Accent.args = {
  colorType: "accent",
}

export const Large = Template.bind({})
Large.args = {
  colorType: "primary",
  size: "large",
}

export const Middle = Template.bind({})
Middle.args = {
  colorType: "primary",
  size: "middle",
}

export const Small = Template.bind({})
Small.args = {
  colorType: "primary",
  size: "small",
}
