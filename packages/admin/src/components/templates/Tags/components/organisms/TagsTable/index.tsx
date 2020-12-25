// import node_modules
import React, { FC } from "react"

// import components
import { StyledTable } from "../../atoms/StyledTable"
import { TagsTableHeader } from "@@/components/templates/Tags/components/molecules/TagsTableHeader"
import { TagsTableRecord } from "../../molecules/TagsTableRecord"

// import others
import { TagsTableProps } from "./types"

// main
export const TagsTable: FC<TagsTableProps> = (props) => {
  const { isSelectAll, tags, handleClickSelectAll } = props

  return (
    <StyledTable>
      <TagsTableHeader
        isSelectAll={isSelectAll}
        handleClickSelectAll={handleClickSelectAll}
      />

      <tbody>
        {tags.map((tag) => {
          const { id } = tag

          return <TagsTableRecord key={id} {...tag} />
        })}
      </tbody>
    </StyledTable>
  )
}
