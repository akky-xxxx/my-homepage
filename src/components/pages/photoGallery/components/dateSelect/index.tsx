/**
 * import node_modules
 */
import React, { FunctionComponent } from "react"
import { makeStyles } from "@material-ui/core"
import { DateRangePicker, DateRange } from "@material-ui/pickers"


/**
 * import others
 */
import { State, HandleActions } from "../../../../../store/modules/pages/photo-gallery/types"
import store2value from "./modules/store2value"
import value2store from "./modules/value2store"

/**
 * main
 */
interface DateSelectProps extends Pick<State, "selectedViewDate">, Pick<HandleActions, "handleSelectViewDate"> {}

const useStyles = makeStyles(() => ({
  picker: {
    flexDirection: "column",
  },
}))

const DateSelect: FunctionComponent<DateSelectProps> = (props) => {
  const { selectedViewDate, handleSelectViewDate } = props
  const value = store2value(selectedViewDate)
  const classes = useStyles()

  const handleChange = (dateList: DateRange) => {
    const selectedDate = value2store(dateList)
    handleSelectViewDate({ selectedDate })
  }

  return (
    <div>
      <DateRangePicker
        className={classes.picker}
        startText="開始"
        endText="終了"
        maxDate={new Date()}
        calendars={2}
        value={value}
        onChange={handleChange}
        variant="outlined"
      />
    </div>
  )
}

export default DateSelect
