/**
 * import node_modules
 */
import React, { FunctionComponent, useState } from "react"
import { DateRangePicker, DateRange } from "@material-ui/pickers"

const DateSelect: FunctionComponent = () => {
  const [selectedDate, handleDateChange] = useState<DateRange>([null, null])

  return (
    <div>
      <DateRangePicker
        startText="開始"
        endText="終了"
        maxDate={new Date()}
        calendars={2}
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        variant="outlined"
      />
    </div>
  )
}

export default DateSelect
