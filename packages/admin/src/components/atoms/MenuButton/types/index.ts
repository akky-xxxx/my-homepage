// import node_modules
import { EmptyFunction } from "common-types"

// main
/**
 * @typedef MenuButtonProps
 * @description ハンバーガーボタン
 * @property isOpen - メニューの展開可否
 * @property onClick - アイコンクリック時の関数
 */
export type MenuButtonProps = {
  isOpen?: boolean
  onClick?: EmptyFunction
}

/**
 * @typedef StyledSvgProps
 */
export type StyledSvgProps = Pick<MenuButtonProps, "isOpen">
