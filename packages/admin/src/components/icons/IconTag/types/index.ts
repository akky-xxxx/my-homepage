// import
import { SizeType } from "@@/shared/types/ui"
import { EmptyFunction } from "@@/shared/types/common"

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
