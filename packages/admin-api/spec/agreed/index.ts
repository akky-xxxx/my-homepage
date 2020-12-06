// import node_modules
import { convert } from "@agreed/typed"

// import modules
import { v1 } from "./api/v1"

// main
const agrees = [...v1]

module.exports = convert(...agrees)
