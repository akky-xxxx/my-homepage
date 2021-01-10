// import node_modules
import { Key } from "@google-cloud/datastore"
import { createNullArray } from "shared-items"

// main
const keyOptions = { path: [] }
export const keys = createNullArray(4).map((_, index) => {
  const key = new Key(keyOptions)
  key.name = `name${index + 1}`
  return key
})
