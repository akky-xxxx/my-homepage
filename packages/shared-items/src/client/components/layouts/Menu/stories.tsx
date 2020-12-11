// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { Menu, MenuProps } from "./index"

// import others
import { dummyMenuList } from "../../const"

// main
const config: Meta<MenuProps> = {
  title: "layouts/Menu",
  component: Menu,
  args: {
    menuList: dummyMenuList,
  },
}
export default config

const Template: Story<MenuProps> = (props) => <Menu {...props} />

export const Default = Template.bind({})
