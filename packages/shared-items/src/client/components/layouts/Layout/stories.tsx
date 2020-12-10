// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"

// import components
import { Layout } from "./index"
import { LayoutProps } from "./types"

// import others
import { dummyMenuList } from "../../const"

// main
const config: Meta<LayoutProps> = {
  title: "layouts/Layout",
  component: Layout,
  args: {
    isShow: true,
    title: "タイトル",
    width: 300,
    menuList: dummyMenuList,
    /* eslint-disable no-console */
    handleOpenMenu: () => console.log("handleOpenMenu"),
    handleCloseMenu: () => console.log("handleCloseMenu"),
    /* eslint-enable no-console */
  },
}
export default config

const Template: Story<LayoutProps> = (props) => (
  <Layout {...props}>{"コンテンツ。".repeat(1000)}</Layout>
)

export const Default = Template.bind({})
