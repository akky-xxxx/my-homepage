// import
import { SizeType } from "@@/shared/types/ui"
import { EmptyFunction } from "@@/shared/types/common"

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
