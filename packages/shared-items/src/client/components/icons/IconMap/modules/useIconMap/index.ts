// import node_modules
import { useCallback, useMemo } from "react"

// import others
import { EmptyFunction } from "../../../../../../common"
import { SizeType } from "../../../../../types/ui"
import { IconMapProps } from "../../types"

// main
const SIZE: Record<SizeType, number> = {
  large: 25,
  middle: 20,
  small: 15,
}

/**
 * @typedef UseIconMapReturn
 * @description custom hook の戻り値
 * @property size - アイコンの width, height
 * @property handleClick - アイコンクリック時の関数
 */
type UseIconMapReturn = {
  size: number
  handleClick: EmptyFunction
}

/**
 * @typedef UseIconMap
 * @description IconMap の custom hook
 */
type UseIconMap = (args: IconMapProps) => UseIconMapReturn

export const useIconMap: UseIconMap = (args) => {
  const { size: argSize, onClick } = args
  const size = useMemo(() => {
    if (!argSize) return SIZE.middle
    return SIZE[argSize]
  }, [argSize])
  const handleClick = useCallback(() => {
    if (onClick) onClick()
  }, [])

  return { size, handleClick }
}
