// import node_modules
import { createLoggerBase } from "shared-items/dist/server"

// import others
import { Common } from "@@/shared/const/Common"

// main
const { IS_TEST } = Common
export const createLogger = createLoggerBase(IS_TEST)
