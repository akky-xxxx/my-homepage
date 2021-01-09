// import node_modules
import { EmptyFunction } from "shared-items"

// import others
import { PaginationProps } from "../../types"

// main
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

  const items = [
    currentPage - 1 > 0 ? currentPage - 1 : undefined,
    currentPage,
    currentPage + 1 <= maxPages ? currentPage + 1 : undefined,
  ].filter(Boolean) as number[]
  if (items.length < 3) {
    if (currentPage - 2 > 0) items.unshift(currentPage - 2)
    if (currentPage + 2 <= maxPages) items.push(currentPage + 2)
  }

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
