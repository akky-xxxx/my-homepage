// import node_modules
import { Key } from "@google-cloud/datastore"

// main
type SortKey = (a: Key, b: Key) => -1 | 0 | 1
export const sortKey: SortKey = (a, b) => {
  const { name: nameA = "" } = a
  const { name: nameB = "" } = b

  if (nameA > nameB) return 1
  if (nameA < nameB) return -1
  return 0
}
