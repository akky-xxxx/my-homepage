// import node_modules
import { format } from "date-fns"
import { AccentDayClass, DateFns } from "shared-items/dist/client"
import { useMemo } from "react"

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
  "accentDates" | "targetName"
>
type UseHorizonDateRangePickerReturn = {
  dayClassName: DayClassName
  startTargetName: string
  endTargetName: string
}
type UseHorizonDateRangePicker = (
  props: UseHorizonDateRangePickerArgs,
) => UseHorizonDateRangePickerReturn

export const useHorizonDateRangePicker: UseHorizonDateRangePicker = (props) => {
  const { accentDates, targetName } = props
  const startTargetName = useMemo(
    () => [targetName, "from"].filter(Boolean).join(" "),
    [targetName],
  )
  const endTargetName = useMemo(
    () => [targetName, "to"].filter(Boolean).join(" "),
    [targetName],
  )
  const dayClassName: DayClassName = useMemo(
    () =>
      accentDates && accentDates.length
        ? (date) =>
            accentDates?.some(
              (accentDate) =>
                format(new Date(accentDate), DATE_SLASH) ===
                format(date, DATE_SLASH),
            )
              ? AccentDayClass
              : null
        : undefined,
    [...accentDates],
  )

  return { dayClassName, startTargetName, endTargetName }
}
