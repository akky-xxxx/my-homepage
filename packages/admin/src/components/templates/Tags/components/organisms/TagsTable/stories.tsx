// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { TagsTable } from "./index"
import { tags } from "./stories.data"

// main
const config: Meta = {
  title: "templates/Tags/organisms/TagsTable",
  component: TagsTable,
}
export default config

export const Default: Story = () => <TagsTable tags={tags} />
