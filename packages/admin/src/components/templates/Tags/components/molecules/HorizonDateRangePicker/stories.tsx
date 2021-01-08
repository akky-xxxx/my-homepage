// import node_modules
import React from "react"
import { Meta, Story } from "@storybook/react"
import { subDays, format } from "date-fns"
import { DateFns } from "shared-items/dist/client"

// import components
import { HorizonDateRangePicker } from "./index"
import { HorizonDateRangePickerProps } from "./types"

// main
const {
  FORMAT: { DATE_SLASH },
} = DateFns

const config: Meta<HorizonDateRangePickerProps> = {
  title: "templates/Tags/molecules/HorizonDateRangePicker",
  component: HorizonDateRangePicker,
  args: {
    startDate: subDays(new Date(), 20),
    endDate: subDays(new Date(), 5),
    accentDates: [
      format(subDays(new Date(), 7), DATE_SLASH),
      format(subDays(new Date(), 1), DATE_SLASH),
    ],
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
