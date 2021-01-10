// import
import { createNullArray } from "shared-items"
import { PaginationProps } from "../../../../types"

// main
const RANGE = 4

type MapCallback = (_: null, index: number) => number
type FilterCallback = (value: number, index: number, self: number[]) => boolean

type GetItemsProps = Omit<PaginationProps, "handleClickPagination">
type GetItems = (props: GetItemsProps) => number[]

export const getItems: GetItems = (props) => {
  const { maxPages, currentPage } = props
  const assignNumber: MapCallback = (_, index) => index - RANGE + currentPage
  const isOutOfPages: FilterCallback = (index) => index > 0 && index <= maxPages
  const isOutOfDisplay1: FilterCallback = (index) =>
    index >= currentPage - RANGE && index <= currentPage + RANGE
  const isOutOfDisplay2: FilterCallback = (index, _, self) => {
    if (self.length <= 5) return true
    const diff = RANGE - 1
    return index >= currentPage - diff && index <= currentPage + diff
  }
  const isOutOfDisplay3: FilterCallback = (index, _, self) => {
    if (self.length <= 5) return true
    const diff = RANGE - 2
    return index >= currentPage - diff && index <= currentPage + diff
  }

  return createNullArray(10)
    .map(assignNumber)
    .filter(isOutOfPages)
    .filter(isOutOfDisplay1)
    .filter(isOutOfDisplay2)
    .filter(isOutOfDisplay3)
}
