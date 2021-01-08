// import node_modules
import { useState } from "react"

// main
export type NullableDate = Date | null
type StartDate = NullableDate
type EndDate = NullableDate
export type HandleChangeRangeDate = (date: NullableDate) => void
type HandleChangeStartDate = HandleChangeRangeDate
type HandleChangeEndDate = HandleChangeRangeDate
export type UseRangePickerReturn = [
  [StartDate, HandleChangeStartDate],
  [EndDate, HandleChangeEndDate],
]
export type UseRangePicker = () => UseRangePickerReturn

export const useRangePicker: UseRangePicker = () => {
  const [startDate, setStartDate] = useState<StartDate>(null)
  const [endDate, setEndDate] = useState<EndDate>(null)
  const handleChangeStartDate: HandleChangeStartDate = (date) => {
    setStartDate(date)
  }
  const handleChangeEndDate: HandleChangeEndDate = (date) => {
    setEndDate(date)
  }

  return [
    [startDate, handleChangeStartDate],
    [endDate, handleChangeEndDate],
  ]
}
