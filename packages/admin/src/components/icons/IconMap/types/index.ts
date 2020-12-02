// import node_modules
import { EmptyFunction } from "common-types"

// import others
import { SizeType } from "@@/shared/types/ui"

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
