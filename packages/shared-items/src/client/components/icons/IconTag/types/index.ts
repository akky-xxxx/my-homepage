// import
import { EmptyFunction } from "@@/common/types"
import { SizeType } from "@@/client/types/ui"

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
