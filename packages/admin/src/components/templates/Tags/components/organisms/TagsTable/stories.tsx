// import node_modules
import React from "react"
import {Meta, Story} from "@storybook/react"

// import components
import {TagsTable} from "./index"
import {TagsTableProps} from "@@/components/templates/Tags/components/organisms/TagsTable/types"
import {tags} from "./stories.data"

// main
const config: Meta<TagsTableProps> = {
  title: "templates/Tags/organisms/TagsTable",
  component: TagsTable,
  args: {
    isSelectAll: false,
  },
  argTypes: {
    handleClickSelectAll: {
      action: "handleClickSelectAll"
    }
  }
}
export default config

export const Default: Story<TagsTableProps> = (props) => (
  <TagsTable {...props} tags={tags}/>
)
