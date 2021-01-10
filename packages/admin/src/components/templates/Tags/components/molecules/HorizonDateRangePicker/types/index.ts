// import node_modules
import { StringDate } from "shared-items"

export type HorizonDateRangePickerProps = {
  startDate: Date | null
  endDate: Date | null
  accentDates: StringDate[]
  handleChangeStartDate: (date: Date | null) => void
  handleChangeEndDate: (date: Date | null) => void
}
