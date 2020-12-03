// import
import { EmptyFunction } from "@@/common/types"
import { SizeType } from "@@/client/types/ui"

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
