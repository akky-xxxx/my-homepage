// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { ChangingTable, ChangingTableProps } from "./index"
import { selectedTags } from "./stories.data"

// main
const config: Meta<ChangingTableProps> = {
  title: "templates/Tags/molecules/ChangingTable",
  component: ChangingTable,
  args: {
    selectedTags,
  },
}
export default config

export const Default: Story<ChangingTableProps> = (props) => (
  <ChangingTable {...props} />
)
