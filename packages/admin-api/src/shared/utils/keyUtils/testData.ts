// import node_modules
import { Key } from "@google-cloud/datastore"

// main
const keyOptions = { path: [] }
export const keys = [...new Array(4)].fill(null).map((_, index) => {
  const key = new Key(keyOptions)
  key.name = `name${index + 1}`
  return key
})
