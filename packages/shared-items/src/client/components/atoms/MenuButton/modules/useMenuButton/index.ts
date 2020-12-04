// import node_modules
import { useCallback } from "react"

// import others
import { EmptyFunction } from "../../../../../../common"
import { MenuButtonProps } from "../../types"

// main
/**
 * @typedef IconHamburgerReturn
 * @description custom hook の戻り値
 * @property isOpen - メニューの展開可否
 * @property handleClick - アイコンクリック時の関数
 */
type IconHamburgerReturn = {
  isOpen: boolean
  handleClick: EmptyFunction
}

/**
 * @typedef UseMenuButton
 * @description MenuButton の custom hook
 */
type UseMenuButton = (args: MenuButtonProps) => IconHamburgerReturn

export const useMenuButton: UseMenuButton = (args) => {
  const { onClick, isOpen = false } = args
  const handleClick = useCallback(() => {
    if (onClick) onClick()
  }, [])

  return { handleClick, isOpen }
}
