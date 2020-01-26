/**
 * import node_modules
 */
import { makeStyles } from "@material-ui/core"
import { blue } from "@material-ui/core/colors"

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: blue[700],
  },
  offset: {
    ...theme.mixins.toolbar,
  },
}))

export default useStyles
