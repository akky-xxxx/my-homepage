export type HorizonDateRangePickerProps = {
  startDate: Date | null
  endDate: Date | null
  accentDates?: Date[]
  handleChangeStartDate: (date: Date | null) => void
  handleChangeEndDate: (date: Date | null) => void
}
