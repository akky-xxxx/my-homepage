// import node_modules
import { useCallback, useMemo } from "react"

// import others
import { SizeType } from "@@/shared/types/ui"
import { EmptyFunction } from "@@/shared/types/common"
import { IconTagProps } from "@@/components/icons/IconTag/types"

// main
const SIZE: Record<SizeType, number> = {
  large: 25,
  middle: 20,
  small: 15,
}

/**
 * @typedef UseIconTagReturn
 * @description custom hook の戻り値
 * @property size - アイコンの width, height
 * @property handleClick - アイコンクリック時の関数
 */
type UseIconTagReturn = {
  size: number
  handleClick: EmptyFunction
}

/**
 * @typedef UseIconTag
 * @description IconTag の custom hook
 */
type UseIconTag = (args: IconTagProps) => UseIconTagReturn

export const useIconTag: UseIconTag = (args) => {
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
