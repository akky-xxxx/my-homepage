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
    filterText: "",
    selectOptions: option,
    selectedOptions: [option[0]],
    createStartDate: null,
    createEndDate: null,
    updateStartDate: null,
    updateEndDate: null,
    accentCreateDates: [],
    accentUpdateDates: [],
  },
  argTypes: {
    handleChangeFilterText: {
      action: "handleChangeFilterText",
    },
    handleSelectOptions: {
      action: "handleSelectOptions",
    },
    handleChangeCreateStartDate: {
      action: "handleChangeCreateStartDate",
    },
    handleChangeCreateEndDate: {
      action: "handleChangeCreateEndDate",
    },
    handleChangeUpdateStartDate: {
      action: "handleChangeUpdateStartDate",
    },
    handleChangeUpdateEndDate: {
      action: "handleChangeUpdateEndDate",
    },
    handleResetConditions: {
      action: "handleResetConditions",
    },
  },
}
export default config

export const Default: Story<ConditionAreaProps> = (props) => (
  <ConditionArea {...props} />
)
