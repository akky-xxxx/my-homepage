// import node_modules
import { format } from "date-fns"

// import others
import { StringDatetime } from "../../../common/types"
import { DateFns } from "../../../common/const/DateFns"

// main
const {
  FORMAT: { DATETIME },
} = DateFns
type FormatDatetime = (targetDatetime: StringDatetime) => StringDatetime
export const formatDatetime: FormatDatetime = (targetDatetime) =>
  format(new Date(targetDatetime), DATETIME)
