// import others
import { EmptyFunction } from "../../../../../common"
import { SizeType } from "../../../../types/ui"

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
