// import node_modules
import { Key } from "@google-cloud/datastore"

// main
type ExtractName = (key: Key) => Key["name"]
export const extractName: ExtractName = (key) => key.name
