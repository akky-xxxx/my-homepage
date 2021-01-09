// import node_modules
import { format } from "date-fns"
import { AccentDayClass, DateFns } from "shared-items/dist/client"

// import others
import { HorizonDateRangePickerProps } from "../../types"

// main
const {
  FORMAT: { DATE_SLASH },
} = DateFns

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
          accentDates?.some(
            (accentDate) =>
              format(new Date(accentDate), DATE_SLASH) ===
              format(date, DATE_SLASH),
          )
            ? AccentDayClass
            : null
      : undefined

  return { dayClassName }
}
