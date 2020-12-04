// import
import { EmptyFunction } from "../../../../../common"
import { SizeType } from "../../../../types/ui"

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
