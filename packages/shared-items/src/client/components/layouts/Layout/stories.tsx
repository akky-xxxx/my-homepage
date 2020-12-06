// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { Layout } from "./index"
import { LayoutProps } from "./types"

const MenuComponent = () => <div>{"メニュー。".repeat(100)}</div>

// main
const config: Meta<LayoutProps> = {
  title: "layouts/Layout",
  component: Layout,
  args: {
    isShow: true,
    title: "タイトル",
    width: 300,
    menu: <MenuComponent />,
    handleOpenMenu: () => {},
    handleCloseMenu: () => {},
  }
}
export default config

const Template: Story<LayoutProps> = (props) => {
  return (
    <Layout {...props}>
      {"コンテンツ。".repeat(1000)}
    </Layout>
  )
}

export const Default = Template.bind({})
