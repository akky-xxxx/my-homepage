// import node_modules
import { Key } from "@google-cloud/datastore"

// main
type MergeKeys = (keys1: Key[], keys2: Key[]) => Key[]
export const mergeKeys: MergeKeys = (keys1, keys2) =>
  Array.from(new Set([...keys1, ...keys2]))
