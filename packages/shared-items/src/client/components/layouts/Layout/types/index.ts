// import
import { EmptyFunction } from "../../../../../common"
import { MenuParentProps } from "../../Menu/types"

// main
export type LayoutProps = {
  isShow: boolean
  title: string
  width: number
  menuList: MenuParentProps[]
  handleOpenMenu: EmptyFunction
  handleCloseMenu: EmptyFunction
}
