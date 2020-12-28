// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { ChangingTable } from "./index"
import { ChangingTableProps } from "./types"
import { selectedTags } from "./stories.data"

// main
const config: Meta<ChangingTableProps> = {
  title: "templates/Tags/molecules/ChangingTable",
  component: ChangingTable,
  args: {
    selectedTags,
    isReleaseAll: true,
  },
  argTypes: {
    handleChangeTagName: {
      action: "handleChangeTagName",
    },
    handleChangeRelease: {
      action: "handleChangeRelease",
    },
    handleChangeReleaseAll: {
      action: "handleChangeReleaseAll",
    },
  },
}
export default config

export const Default: Story<ChangingTableProps> = (props) => (
  <ChangingTable {...props} />
)
