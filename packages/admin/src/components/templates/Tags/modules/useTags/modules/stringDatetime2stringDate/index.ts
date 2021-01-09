// import node_modules
import { StringDatetime, StringDate } from "shared-items"

// main
type StringDatetime2stringDate = (input: StringDatetime) => StringDate
export const stringDatetime2stringDate: StringDatetime2stringDate = (input) =>
  input.slice(0, 10)
