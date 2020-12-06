// import node_modules
import React, { PropsWithChildren } from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { Tag } from "./index"
import { TagProps } from "./types"

// main
const config: Meta = {
  title: "atoms/Tag",
  component: Tag,
  args: {
    children: "tag",
  },
}
export default config

const Template: Story<PropsWithChildren<TagProps>> = (props) => {
  return <Tag {...props} />
}

export const Default = Template.bind({})
export const DefaultActive = Template.bind({})
DefaultActive.args = {
  isActive: true,
}

export const Primary = Template.bind({})
Primary.args = {
  colorType: "primary",
}

export const PrimaryActive = Template.bind({})
PrimaryActive.args = {
  colorType: "primary",
  isActive: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  colorType: "secondary",
}
export const SecondaryActive = Template.bind({})
SecondaryActive.args = {
  colorType: "secondary",
  isActive: true,
}

export const Accent = Template.bind({})
Accent.args = {
  colorType: "accent",
}
export const AccentActive = Template.bind({})
AccentActive.args = {
  colorType: "accent",
  isActive: true,
}
