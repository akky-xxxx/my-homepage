// import node_modules
import { createNullArray } from "shared-items"

// main
export const PAGE_NUMBER_OPTIONS = createNullArray(10).map((_, index) => {
  const num = (index + 1) * 10
  return { value: num, label: `${num} 件` }
})
