// import
import { EmptyFunction } from "../../../../../common"
import { SizeType } from "../../../../types/ui"

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
