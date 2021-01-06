export type HorizonDateRangePickerProps = {
  startDate: Date | null
  endDate: Date | null
  handleChangeStartDate: (date: Date | null) => void
  handleChangeEndDate: (date: Date | null) => void
}
