// import node_modules
import { company } from "faker" // eslint-disable-line import/no-extraneous-dependencies

// import others
import { MenuProps } from "../layouts/Menu"

// main
const getMenuList = (): MenuProps["menuList"] =>
  [...Array(5)].fill(null).map((_1, index1) => ({
    parentLabel: company.bs(),
    menuChildren: [...Array(5)].fill(null).map((_2, index2) => ({
      childLabel: company.catchPhrase(),
      href: `#${index1 + 1}-${index2 + 1}`,
    })),
  }))

export const dummyMenuList: MenuProps["menuList"] = getMenuList()
