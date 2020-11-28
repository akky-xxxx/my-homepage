// import node_modules
import React, { FC, useCallback } from "react"

// import components
import { Tag } from "@@/components/atoms/Tag"
import { TagProps } from "@@/components/atoms/Tag/types"

// main
type HandleClickTag = (id: string) => void
export type FilterTagProps = Pick<TagProps, "isActive"> & {
  id: string
  label: string
  handleClickTag: HandleClickTag
  className?: string
}

export const FilterTag: FC<FilterTagProps> = (props) => {
  const { id, label, handleClickTag, isActive, className } = props
  const handleClick = useCallback(() => handleClickTag(id), [id])

  return (
    <Tag
      colorType="primary"
      onClick={handleClick}
      isActive={isActive}
      className={className}
    >
      {label}
    </Tag>
  )
}
