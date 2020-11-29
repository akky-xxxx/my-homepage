// import
import { postTags } from "./post"
import { getTags } from "./get"
import { putTags } from "./put"

// main
export const tags = [...postTags, ...getTags, ...putTags]
