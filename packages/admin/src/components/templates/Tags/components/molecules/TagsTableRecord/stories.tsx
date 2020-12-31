// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { TagsTableRecord } from "./index"
import { TagsTableRecordProps } from "./types"

// main
const config: Meta<TagsTableRecordProps> = {
  title: "templates/Tags/molecules/TagsTableRecord",
  component: TagsTableRecord,
  argTypes: {
    handleClickSelect: {
      action: "handleClickSelect",
    },
    handleClickRelease: {
      action: "handleClickRelease",
    },
  },
}
export default config

const Default: Story<TagsTableRecordProps> = (props) => (
  <TagsTableRecord {...props} />
)

export const Pattern1 = Default.bind({})
Pattern1.args = {
  tagId: "1",
  isSelect: true,
  tagName: "タグ1",
  settingCount: 0,
  isRelease: true,
  createdAt: "2020-01-01 00:00:00",
  updatedAt: "2020-01-01 00:00:00",
}

export const Pattern2 = Default.bind({})
Pattern2.args = {
  tagId: "1",
  isSelect: false,
  tagName: "タグ2",
  settingCount: 1000000,
  isRelease: false,
  createdAt: "2020-12-31 23:59:59",
  updatedAt: "2020-12-31 23:59:59",
}
