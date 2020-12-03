// import
import { EmptyFunction } from "@@/common/types"
import { SizeType } from "@@/client/types/ui"

// main
/**
 * @typedef IconCalendarProps
 * @description カレンダーアイコン
 * @property size - SizeType
 * @property onClick - アイコンクリック時の関数
 */
export type IconCalendarProps = {
  size?: SizeType
  onClick?: EmptyFunction
}
