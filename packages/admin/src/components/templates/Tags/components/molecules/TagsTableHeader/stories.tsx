// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { TagsTableHeader } from "./index"
import { TagsTableHeaderProps } from "./types"

// main
const config: Meta<TagsTableHeaderProps> = {
  title: "templates/Tags/molecules/TagsTableHeader",
  component: TagsTableHeader,
  argTypes: {
    handleClickSelectAll: {
      action: "handleClickSelectAll",
    },
  },
}
export default config

const Default: Story<TagsTableHeaderProps> = (props) => (
  <TagsTableHeader {...props} />
)

export const AllChecked = Default.bind({})
AllChecked.args = {
  isSelectAll: true,
}

export const AllNotChecked = Default.bind({})
AllNotChecked.args = {
  isSelectAll: false,
}
