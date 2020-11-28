// import node_modules
import { convert } from "@agreed/typed"

// import modules
import { sampleGet } from "./api/v1/sample/get"
import { getTags } from "./api/v1/tags/get"

// main
const agrees = [...sampleGet, ...getTags]

module.exports = convert(...agrees)
