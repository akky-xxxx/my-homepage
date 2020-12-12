// import node_modules
import { LayoutProps } from "shared-items/dist/client"

// main
export const MenuList: LayoutProps["menuList"] = [
  {
    parentLabel: "タグ",
    menuChildren: [
      {
        childLabel: "タグ一覧",
        href: "/tags",
      },
    ],
  },
]
