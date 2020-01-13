/**
 * import node_modules
 */
import React, { Fragment, FC } from "react"
import { AppBar, Toolbar, IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

/**
 * import others
 */
import useStyles from "./useStyles"

/**
 * main
 */
interface HeaderBarProps {
  handleOpenMenu: () => void
}

const HeaderBar: FC<HeaderBarProps> = props => {
  const { handleOpenMenu } = props
  const classes = useStyles()

  return (
    <Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpenMenu}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </Fragment>
  )
}

export default HeaderBar
