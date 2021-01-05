// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"
import { subDays } from "date-fns"

// import components
import { HorizonDateRangePicker, HorizonDateRangePickerProps } from "./index"

// main
const config: Meta<HorizonDateRangePickerProps> = {
  title: "templates/Tags/molecules/HorizonDateRangePicker",
  component: HorizonDateRangePicker,
  args: {
    startDate: new Date(subDays(new Date(), 20)),
    endDate: new Date(subDays(new Date(), 5)),
  },
  argTypes: {
    handleChangeStartDate: {
      action: "handleChangeStartDate",
    },
    handleChangeEndDate: {
      action: "handleChangeEndDate",
    },
  },
}
export default config

export const Default: Story<HorizonDateRangePickerProps> = (props) => (
  <HorizonDateRangePicker {...props} />
)
