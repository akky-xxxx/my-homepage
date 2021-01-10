// import node_modules
import { EmptyFunction } from "shared-items"

// import others
import { PaginationProps } from "../../types"
import { getItems } from "./modules/getItems"

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

  const items = getItems({ maxPages, currentPage })

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
