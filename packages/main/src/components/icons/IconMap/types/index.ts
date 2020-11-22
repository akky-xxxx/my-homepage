// import
import { SizeType } from "@@/shared/types/ui"
import { EmptyFunction } from "@@/shared/types/common"

// main
/**
 * @typedef IconMapProps
 * @description 地図アイコン
 * @property size - SizeType
 * @property onClick - アイコンクリック時の関数
 */
export type IconMapProps = {
  size?: SizeType
  onClick?: EmptyFunction
}
