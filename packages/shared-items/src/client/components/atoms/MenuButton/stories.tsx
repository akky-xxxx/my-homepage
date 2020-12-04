// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { MenuButton } from "./index"
import { MenuButtonProps } from "./types"

// main
const config: Meta<MenuButtonProps> = {
  title: "atoms/MenuButton",
  component: MenuButton,
}
export default config

const Template: Story<MenuButtonProps> = (props) => {
  return <MenuButton {...props} />
}

export const Default = Template.bind({})

export const Opened = Template.bind({})
Opened.args = {
  isOpen: true,
}
