// import node_modules
import React, { FC } from "react"
import { Checkbox } from "shared-items/dist/client"

// import components
import { StyledTable, StyledTh } from "../../atoms/StyledTable"
import { TagsTableRecord } from "../../molecules/TagsTableRecord"

// import others
import { TagsTableProps } from "./types"

// main
export const TagsTable: FC<TagsTableProps> = (props) => {
  const { tags } = props

  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTh>
            <Checkbox
              isChecked={false}
              // TODO: 仮実装
              // eslint-disable-next-line no-console
              handleChange={() => console.log("handleChange")}
            />
          </StyledTh>
          <StyledTh>タグ名</StyledTh>
          <StyledTh />
          <StyledTh>設定数</StyledTh>
          <StyledTh>追加日</StyledTh>
          <StyledTh>変更日</StyledTh>
        </tr>
      </thead>

      <tbody>
        {tags.map((tag) => {
          const { id } = tag

          return <TagsTableRecord key={id} {...tag} />
        })}
      </tbody>
    </StyledTable>
  )
}
