// import node_modules
import { convert } from "@agreed/typed"

// import modules
import { postTags } from "./api/v1/tags/post"
import { getTags } from "./api/v1/tags/get"

// main
const tags = [...postTags, ...getTags]
const agrees = [...tags]

module.exports = convert(...agrees)
