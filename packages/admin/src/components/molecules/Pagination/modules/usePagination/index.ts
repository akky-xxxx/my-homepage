// import node_modules
import { EmptyFunction } from "shared-items"

// import others
import { PaginationProps } from "../../types"

// main
const RANGE = 4

type UsePaginationReturn = {
  enablePrev: boolean
  enableNext: boolean
  items: number[]
  handleClickFirst: EmptyFunction
  handleClickPrev: EmptyFunction
  handleClickNext: EmptyFunction
  handleClickLast: EmptyFunction
}
type UsePagination = (props: PaginationProps) => UsePaginationReturn

export const usePagination: UsePagination = (props) => {
  const { maxPages, currentPage, handleClickPagination } = props

  const enablePrev = currentPage > 1
  const enableNext = currentPage < maxPages
  const handleClickFirst = () => handleClickPagination(1)
  const handleClickPrev = () => handleClickPagination(currentPage - 1)
  const handleClickNext = () => handleClickPagination(currentPage + 1)
  const handleClickLast = () => handleClickPagination(maxPages)

  const items = [...new Array(10)]
    .fill(null)
    .map((_, index) => index - RANGE + currentPage)
    .filter((index) => index > 0 && index <= maxPages)
    .filter((index) => index >= currentPage - RANGE && index <= currentPage + RANGE)
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

  return {
    enablePrev,
    enableNext,
    items,
    handleClickFirst,
    handleClickPrev,
    handleClickNext,
    handleClickLast,
  }
}
