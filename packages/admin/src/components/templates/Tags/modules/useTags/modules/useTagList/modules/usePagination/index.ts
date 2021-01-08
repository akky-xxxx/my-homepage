// import node_modules
import { useState } from "react"

// main
export type Page = number
export type HandleClickPagination = (targetPage: Page) => void
type UsePaginationReturn = [Page, HandleClickPagination]
export type UsePagination = () => UsePaginationReturn

export const usePagination: UsePagination = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const handleClickPagination: HandleClickPagination = (targetPage) => {
    setCurrentPage(targetPage)
  }

  return [currentPage, handleClickPagination]
}
