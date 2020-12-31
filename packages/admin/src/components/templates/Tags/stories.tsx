// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { Tags } from "./index"
import { TagsProps } from "./types"
import { tags } from "./stories.data"

// main
const config: Meta<TagsProps> = {
  title: "templates/Tags",
  component: Tags,
  args: {
    tags,
  },
}
export default config

export const Default: Story<TagsProps> = (props) => <Tags {...props} />
