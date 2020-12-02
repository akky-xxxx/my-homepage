// import node_modules
import { EmptyFunction } from "shared-items"

// import
import { SizeType } from "@@/shared/types/ui"

// main
/**
 * @typedef IconCloseProps
 * @description 閉じるアイコン
 * @property size - SizeType
 * @property onClick - アイコンクリック時の関数
 */
export type IconCloseProps = {
  size?: SizeType
  onClick?: EmptyFunction
}
