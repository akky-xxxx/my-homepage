// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { Header, HeaderProps } from "./index"

// main
const config: Meta<HeaderProps> = {
  title: "layouts/Header",
  component: Header,
  args: {
    isShow: false,
    title: "タイトル",
    // eslint-disable-next-line no-console
    handleClickMenuButton: () => console.log("handleClickMenuButton"),
  },
}
export default config

const Template: Story<HeaderProps> = (props) => (
  <Header {...props}>{"メニュー。".repeat(100)}</Header>
)

export const Default = Template.bind({})
