export type MenuChildProps = {
  childLabel: string
  href: string
}

export type MenuParentProps = {
  parentLabel: string
  menuChildren: MenuChildProps[]
}

export type MenuProps = {
  menuList: MenuParentProps[]
}
