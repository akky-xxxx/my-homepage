// import node_modules
import { convert } from "@agreed/typed"

// import modules
import { sampleGet } from "./api/v1/sample/get"

// main
const agrees = [...sampleGet]

module.exports = convert(...agrees)
