// import node_modules
import { convert } from "@agreed/typed"

// import modules
import { getTags } from "./api/v1/tags/get"

// main
const agrees = [...getTags]

module.exports = convert(...agrees)
