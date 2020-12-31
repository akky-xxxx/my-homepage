// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { SubMenu, SubMenuProps } from "./index"

// main
const config: Meta<SubMenuProps> = {
  title: "templates/Tags/molecules/SubMenu",
  component: SubMenu,
  argTypes: {
    handleClickSelectAll: {
      action: "handleClickSelectAll",
    },
  },
}
export default config

export const Default: Story<SubMenuProps> = (props) => <SubMenu {...props} />
