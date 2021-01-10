// import
import { PaginationProps } from "../../../../types"

// main
const RANGE = 4

type GetItemsProps = Omit<PaginationProps, "handleClickPagination">
type GetItems = (props: GetItemsProps) => number[]

export const getItems: GetItems = (props) => {
  const { maxPages, currentPage } = props
  const assignNumber = (_: undefined, index: number) =>
    index - RANGE + currentPage
  const isOutOfPages = (index: number) => index > 0 && index <= maxPages
  const isOutOfDisplay1 = (index: number) =>
    index >= currentPage - RANGE && index <= currentPage + RANGE
  const isOutOfDisplay2 = (index: number, _: number, self: number[]) => {
    if (self.length <= 5) return true
    const diff = RANGE - 1
    return index >= currentPage - diff && index <= currentPage + diff
  }
  const isOutOfDisplay3 = (index: number, _: number, self: number[]) => {
    if (self.length <= 5) return true
    const diff = RANGE - 2
    return index >= currentPage - diff && index <= currentPage + diff
  }

  return [...new Array(10)]
    .fill(null)
    .map(assignNumber)
    .filter(isOutOfPages)
    .filter(isOutOfDisplay1)
    .filter(isOutOfDisplay2)
    .filter(isOutOfDisplay3)
}
