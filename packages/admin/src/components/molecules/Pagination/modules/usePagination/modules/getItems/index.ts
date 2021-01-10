// import
import { PaginationProps } from "../../../../types"

// main
const RANGE = 4

type GetItemsProps = Omit<PaginationProps, "handleClickPagination">
type GetItems = (props: GetItemsProps) => number[]

export const getItems: GetItems = (props) => {
  const { maxPages, currentPage } = props

  return [...new Array(10)]
    .fill(null)
    .map((_, index) => index - RANGE + currentPage)
    .filter((index) => index > 0 && index <= maxPages)
    .filter(
      (index) => index >= currentPage - RANGE && index <= currentPage + RANGE,
    )
    .filter((index, _, self) => {
      if (self.length <= 5) return true
      const diff = RANGE - 1
      return index >= currentPage - diff && index <= currentPage + diff
    })
    .filter((index, _, self) => {
      if (self.length <= 5) return true
      const diff = RANGE - 2
      return index >= currentPage - diff && index <= currentPage + diff
    })
}
