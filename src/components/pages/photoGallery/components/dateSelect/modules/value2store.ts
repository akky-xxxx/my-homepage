/**
 * import node_modules
 */
import { DateRange } from "@material-ui/pickers"

/**
 * import
 */
import { State } from "../../../../../../store/modules/pages/photo-gallery/viewDate/types"

type Value2store = (dateList: DateRange) => State
const value2store: Value2store = (dateList: DateRange) =>
  dateList.map((date) => date ? date.toString() : null) as State

export default value2store
