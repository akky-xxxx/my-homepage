// import node_modules
import React from "react"
import { Story, Meta } from "@storybook/react"
import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker"

// import components
import { PickerWrapper } from "./index"
import { Input } from "../Input"

// main
const config: Meta<ReactDatePickerProps> = {
  title: "atoms/PickerWrapper",
  component: PickerWrapper,
  args: {
    selected: new Date(2021, 0, 1),
    startDate: new Date(2021, 0, 2),
    endDate: new Date(2021, 0, 4),
    selectsEnd: true,
  },
  argTypes: {
    onChange: {
      action: "onChange",
    },
  },
}
export default config

export const Template: Story<ReactDatePickerProps> = (props) => (
  <ReactDatePicker
    {...props}
    calendarContainer={PickerWrapper}
    customInput={<Input />}
  />
)
