// import node_modules
import { useCallback, useMemo } from "react"

// import others
import { EmptyFunction } from "@@/common/types"
import { SizeType } from "@@/client/types/ui"
import { IconCalendarProps } from "@@/client/components/icons/IconCalendar/types"

// main
const SIZE: Record<SizeType, number> = {
  large: 25,
  middle: 20,
  small: 15,
}

/**
 * @typedef UseIconCalendarReturn
 * @description custom hook の戻り値
 * @property size - アイコンの width, height
 * @property handleClick - アイコンクリック時の関数
 */
type UseIconCalendarReturn = {
  size: number
  handleClick: EmptyFunction
}

/**
 * @typedef UseIconCalendar
 * @description IconCalendar の custom hook
 */
type UseIconCalendar = (args: IconCalendarProps) => UseIconCalendarReturn

export const useIconCalendar: UseIconCalendar = (args) => {
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
