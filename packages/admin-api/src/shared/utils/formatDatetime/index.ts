// import node_modules
import { format } from "date-fns"
import { StringDatetime } from "common-types"

// import others
import { DateFns } from "@@/shared/const/DateFns"

// main
const {
  FORMAT: { DATETIME },
} = DateFns
type FormatDatetime = (targetDatetime: StringDatetime) => StringDatetime
export const formatDatetime: FormatDatetime = (targetDatetime) =>
  format(new Date(targetDatetime), DATETIME)
