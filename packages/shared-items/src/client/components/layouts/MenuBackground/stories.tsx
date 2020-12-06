// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { MenuBackground } from "./index"
import { MenuBackgroundProps } from "./types"

// main
const config: Meta<MenuBackgroundProps> = {
  title: "layouts/MenuBackground",
  component: MenuBackground,
  args: {
    isShow: true,
    width: 300,
  },
}
export default config

const Template: Story<MenuBackgroundProps> = (props) => (
  <MenuBackground {...props}>{"メニュー。".repeat(100)}</MenuBackground>
)

export const Default = Template.bind({})
