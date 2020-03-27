/**
 * import node_modules
 */
import React, { FC } from "react"
import { Drawer, List } from "@material-ui/core"

/**
 * import components
 */
import MenuItem from "../menuItem"

/**
 * import others
 */
import menuData from "../../../shared/const/menuData"

/**
 * main
 */
interface MenuDrawerProps {
  isMenuOpen: boolean
  handleCloseMenu: () => void
}

const MenuDrawer: FC<MenuDrawerProps> = (props) => {
  const { isMenuOpen, handleCloseMenu } = props

  return (
    <Drawer open={isMenuOpen} onClose={handleCloseMenu}>
      <List>
        {menuData.map((menuItem) => {
          const { href, linkLabel } = menuItem

          return <MenuItem key={href} href={href} linkLabel={linkLabel} handleCloseMenu={handleCloseMenu} />
        })}
      </List>
    </Drawer>
  )
}

export default MenuDrawer
