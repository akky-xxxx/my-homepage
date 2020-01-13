/**
 * import node_modules
 */
import React, { FC, Fragment } from "react"
import { GridList, Hidden, createMuiTheme } from "@material-ui/core"

/**
 * import node_modules
 */
import getHiddenBreakpoints from "../../../../../shared/utils/getHiddenBreakpoints"

/**
 * main
 */
const { spacing } = createMuiTheme()

const GalleryBodyWrapper: FC = props => {
  const { children } = props

  return (
    <Fragment>
      {/* lg, xl で表示 */}
      <Hidden only={getHiddenBreakpoints(["lg", "xl"])}>
        <GridList cols={4} cellHeight="auto" spacing={spacing(2)}>
          {children}
        </GridList>
      </Hidden>

      {/* md で表示 */}
      <Hidden only={getHiddenBreakpoints(["md"])}>
        <GridList cols={3} cellHeight="auto" spacing={spacing(2)}>
          {children}
        </GridList>
      </Hidden>

      {/* xs, sm で表示 */}
      <Hidden only={getHiddenBreakpoints(["xs", "sm"])}>
        <GridList cols={2} cellHeight="auto" spacing={spacing(1)}>
          {children}
        </GridList>
      </Hidden>
    </Fragment>
  )
}

export default GalleryBodyWrapper
