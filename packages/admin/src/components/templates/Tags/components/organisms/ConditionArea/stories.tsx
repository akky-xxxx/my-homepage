// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"

// import components
import { ConditionArea, ConditionAreaProps } from "./index"

// main
const option = [
  { label: "test-label1", value: "test-label1" },
  { label: "test-label2", value: "test-label2" },
]

const config: Meta<ConditionAreaProps> = {
  title: "templates/Tags/organisms/ConditionArea",
  component: ConditionArea,
  args: {
    selectOptions: option,
    selectedOptions: [option[0]],
  },
  argTypes: {
    handleSelectOptions: {
      action: "handleSelectOptions",
    },
  },
}
export default config

export const Default: Story<ConditionAreaProps> = (props) => (
  <ConditionArea {...props} />
)
