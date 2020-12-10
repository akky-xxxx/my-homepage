// import node_modules
import React, { FC } from "react"

// import components
import { MenuParent } from "./components/atoms/MenuParent"
import { MenuParentProps } from "./types"

// main
export type MenuProps = {
  menuList: MenuParentProps[]
}

export const Menu: FC<MenuProps> = (props) => {
  const { menuList } = props

  return (
    <nav>
      <ul>
        {menuList.map((menuParent) => {
          const { parentLabel } = menuParent
          return <MenuParent key={parentLabel} {...menuParent} />
        })}
      </ul>
    </nav>
  )
}
