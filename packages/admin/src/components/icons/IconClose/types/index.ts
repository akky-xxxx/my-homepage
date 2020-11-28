// import
import { SizeType } from "@@/shared/types/ui"
import { EmptyFunction } from "@@/shared/types/common"

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
