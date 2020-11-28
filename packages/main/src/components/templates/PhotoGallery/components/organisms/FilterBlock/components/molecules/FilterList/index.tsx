// import node_modules
import React, { FC } from "react"
import styled from "styled-components"

// import components
import {
  ToggleContent,
  ToggleContentProps,
} from "@@/components/templates/PhotoGallery/components/organisms/FilterBlock/components/atoms/ToggleContent"
import { FilterTag } from "@@/components/templates/PhotoGallery/components/organisms/FilterBlock/components/atoms/FilterTag"

// import others
import { EmptyFunction } from "@@/shared/types/common"

// main
type TagData = {
  id: string
  label: string
}
type FilterListProps = ToggleContentProps & {
  tags: TagData[]
  handleClickTag: EmptyFunction
}

export const FilterList: FC<FilterListProps> = (props) => {
  const { isOpen, tags, handleClickTag } = props

  return (
    <ToggleContent isOpen={isOpen}>
      <StyledUl>
        {tags.map((tagData) => {
          const { id, label } = tagData
          return (
            <StyledFilterTag
              key={id}
              id={id}
              label={label}
              handleClickTag={handleClickTag}
            />
          )
        })}
      </StyledUl>
    </ToggleContent>
  )
}

const MARGIN = 8

const StyledUl = styled.ul`
  margin-left: ${MARGIN * -1}px;
`

const StyledFilterTag = styled(FilterTag)`
  margin-left: ${MARGIN}px;
`
