/**
 * import node_modules
 */
import {DateRange} from "@material-ui/pickers"

/**
 * import others
 */
import { State } from "../../../../../../store/modules/pages/photo-gallery/viewDate/types"

type Store2value = (selectedViewDate: State) => DateRange
const store2value: Store2value = (selectedViewDate) =>
  selectedViewDate.map((date) => date ? new Date(date) : null) as DateRange

export default store2value
