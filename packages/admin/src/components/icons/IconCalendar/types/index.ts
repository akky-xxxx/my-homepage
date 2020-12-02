// import node_modules
import { EmptyFunction } from "common-types"

// import others
import { SizeType } from "@@/shared/types/ui"

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
