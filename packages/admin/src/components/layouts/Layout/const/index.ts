// import node_modules
import { LayoutProps } from "shared-items/dist/client"

// import others
import { ScreenNames } from "@@/shared/const/ScreenNames"

// main
const { ADMIN, TAGS } = ScreenNames
export const MenuList: LayoutProps["menuList"] = [
  {
    parentLabel: ADMIN.LABEL,
    menuChildren: [
      {
        childLabel: ADMIN.TOP,
        href: "/",
      },
    ],
  },
  {
    parentLabel: TAGS.LABEL,
    menuChildren: [
      {
        childLabel: TAGS.LIST,
        href: "/tags",
      },
    ],
  },
]
