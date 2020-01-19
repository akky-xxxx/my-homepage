/**
 * import node_modules
 */
import React, { FC, Fragment, useState } from "react"

/**
 * import components
 */
import HeaderBar from "../headerBar"
import MenuDrawer from "../menuDrawer"

/**
 * main
 */
const Layout: FC = props => {
  const { children } = props
  // TODO: redux に差し替える
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleOpenMenu = () => setMenuOpen(true)
  const handleCloseMenu = () => setMenuOpen(false)

  return (
    <Fragment>
      <HeaderBar handleOpenMenu={handleOpenMenu} />
      <MenuDrawer isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu} />

      <main>{children}</main>
    </Fragment>
  )
}

export default Layout
