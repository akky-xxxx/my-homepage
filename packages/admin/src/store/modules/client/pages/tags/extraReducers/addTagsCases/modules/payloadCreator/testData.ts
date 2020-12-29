// import node_modules
import { format } from "url"

export const tagNames = ["test1", "test2"]

export const endpoint = format({ href: "/api/tags*", query: { tagNames } })
