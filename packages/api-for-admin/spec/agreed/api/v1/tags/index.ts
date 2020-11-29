// import
import { postTags } from "./post"
import { getTags } from "./get"
import { putTags } from "./put"
import { deleteTags } from "./delete"

// main
export const tags = [...postTags, ...getTags, ...putTags, ...deleteTags]
