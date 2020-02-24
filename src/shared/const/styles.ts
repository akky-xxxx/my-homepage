/**
 * import node_modules
 */
import { createMuiTheme } from "@material-ui/core"
import * as MUI_COLORS from "@material-ui/core/colors"

/**
 * main
 */
const { spacing, breakpoints } = createMuiTheme()

/**
 * グロナビの余白の付け方にあわせてる
 */
export const APP_BREAKPOINTS = {
  PC: breakpoints.up("sm"),
  SP: breakpoints.down("xs"),
} as const

/**
 * 横の余白はグロナビの余白の付け方にあわせてる
 */
export const APP_MARGINS = {
  PC: {
    HORIZON: spacing(3),
    VERTICAL: spacing(2),
  },
  SP: {
    HORIZON: spacing(2),
    VERTICAL: spacing(1),
  },
} as const

/**
 * mui colors
 */
type MUI_COLOR_KEYS = keyof typeof MUI_COLORS

export const COLORS = (Object.keys(MUI_COLORS) as MUI_COLOR_KEYS[])
  .filter(key => key !== "common")
  .map(key => MUI_COLORS[key as Exclude<MUI_COLOR_KEYS, "common">][500])
