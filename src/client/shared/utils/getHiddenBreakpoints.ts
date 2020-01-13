/**
 * import node_modules
 */
import { createMuiTheme } from "@material-ui/core"
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints"

/**
 * main
 */
type Breakpoints = Breakpoint[]

const getHiddenBreakpoints = (showBreakpoints: Breakpoints): Breakpoints =>
  createMuiTheme().breakpoints.keys.filter(breakpoint => !showBreakpoints.includes(breakpoint))

export default getHiddenBreakpoints
