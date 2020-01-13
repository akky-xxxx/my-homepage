/**
 * import node_modules
 */
import React, { FC, Fragment, useState } from "react"
import { createMuiTheme } from "@material-ui/core"
import styled from "styled-components"

/**
 * import components
 */
import HeaderBar from "../headerBar"
import MenuDrawer from "../menuDrawer"

/**
 * main
 */
const { spacing } = createMuiTheme()
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

      <ContentWrapper>{children}</ContentWrapper>
    </Fragment>
  )
}

const ContentWrapper = styled.div`
  padding: ${spacing(2)}px;
`

export default Layout
