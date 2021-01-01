// import node_modules
import { Key } from "@google-cloud/datastore"

// main
const extractName = (key: Key): Key["name"] => key.name

type IsSameKeys = (keys1: Key[], keys2: Key[]) => boolean
export const isSameKeys: IsSameKeys = (keys1, keys2) => {
  if (keys1.length !== keys2.length) return false

  const names1 = keys1.map(extractName).filter(Boolean).sort()
  const names2 = keys2.map(extractName).filter(Boolean).sort()

  return names1.every((name1, index) => name1 === names2[index])
}
