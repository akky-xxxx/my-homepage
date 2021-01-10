// import node_modules
import { useState, useMemo } from "react"

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
  const handleChangeStartDate: HandleChangeStartDate = useMemo(
    () => (date) => {
      setStartDate(date)
    },
    [],
  )
  const handleChangeEndDate: HandleChangeEndDate = useMemo(
    () => (date) => {
      setEndDate(date)
    },
    [],
  )

  return [
    [startDate, handleChangeStartDate],
    [endDate, handleChangeEndDate],
  ]
}
