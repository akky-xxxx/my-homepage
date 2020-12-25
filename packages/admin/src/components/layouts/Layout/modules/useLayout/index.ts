// import node_modules
import { LayoutProps } from "shared-items/dist/client"

// import others
import { actions, useDispatch, useSelector } from "@@/store"
import { layoutSelector } from "@@/selectors/server/app/layoutSelector"
import { MenuList } from "../../const"

// main
const {
  server: {
    app: {
      layout: { openMenu, closeMenu },
    },
  },
} = actions

type UseLayout = () => LayoutProps
export const useLayout: UseLayout = () => {
  const { isShowMenu: isShow, title } = useSelector(layoutSelector)
  const dispatch = useDispatch()
  const handleOpenMenu = () => dispatch(openMenu())
  const handleCloseMenu = () => dispatch(closeMenu())
  const width = 300
  const menuList = MenuList

  return {
    isShow,
    title,
    width,
    menuList,
    handleOpenMenu,
    handleCloseMenu,
  }
}
