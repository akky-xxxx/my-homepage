// import node_modules
import { EmptyFunction } from "shared-items"

// import others
import { SizeType } from "@@/shared/types/ui"

// main
/**
 * @typedef IconTagProps
 * @description タグアイコン
 * @property size - SizeType
 * @property onClick - アイコンクリック時の関数
 */
export type IconTagProps = {
  size?: SizeType
  onClick?: EmptyFunction
}
