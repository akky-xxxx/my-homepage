// import node_modules
import { isEqual } from "date-fns"
import { AccentDayClass } from "shared-items/dist/client"

// import others
import { HorizonDateRangePickerProps } from "../../types"

// main
type getSelector = (date: Date) => typeof AccentDayClass | null
type DayClassName = undefined | getSelector
type UseHorizonDateRangePickerArgs = Pick<
  HorizonDateRangePickerProps,
  "accentDates"
>
type UseHorizonDateRangePickerReturn = {
  dayClassName: DayClassName
}
type UseHorizonDateRangePicker = (
  props: UseHorizonDateRangePickerArgs,
) => UseHorizonDateRangePickerReturn

export const useHorizonDateRangePicker: UseHorizonDateRangePicker = (props) => {
  const { accentDates } = props
  const dayClassName: DayClassName =
    accentDates && accentDates.length
      ? (date) =>
          accentDates?.some((accentDate) => isEqual(accentDate, date))
            ? AccentDayClass
            : null
      : undefined

  return { dayClassName }
}
