// import node_modules
import { ReactNode } from "react"

// import others
import { EmptyFunction } from "../../../../../common"

// main
export type LayoutProps = {
  isShow: boolean
  title: string
  width: number
  menu: ReactNode
  handleOpenMenu: EmptyFunction
  handleCloseMenu: EmptyFunction
}
