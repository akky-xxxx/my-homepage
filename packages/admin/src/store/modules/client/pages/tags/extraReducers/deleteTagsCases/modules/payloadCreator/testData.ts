// import node_modules
import { format } from "url"

// main
export const tagIds = ["id1", "id2"]

export const endpoint = `/api/tags${format({ query: { tagIds } })}`
