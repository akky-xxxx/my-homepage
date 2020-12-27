// import node_modules
import React, { FC } from "react"
import { CheckMark } from "shared-items/dist/client"

// import others
import { TagsTableRecordStates } from "../TagsTableRecord/types"
import {
  StyledTable,
  StyledTr,
  StyledTh,
  StyledTd,
} from "../../atoms/StyledTable"

// main
export type ChangingTableProps = {
  selectedTags: TagsTableRecordStates[]
}

export const ChangingTable: FC<ChangingTableProps> = (props) => {
  const { selectedTags } = props

  if (!selectedTags.length) return null

  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTh>タグ名</StyledTh>
          <StyledTh>
            <CheckMark isChecked />
          </StyledTh>
        </tr>
      </thead>

      <tbody>
        {selectedTags.map((tag) => {
          const { tagId, tagName, isRelease } = tag
          return (
            <StyledTr key={tagId}>
              <StyledTd>
                <input type="text" value={tagName} />
              </StyledTd>
              <StyledTd>
                <CheckMark isChecked={isRelease} />
              </StyledTd>
            </StyledTr>
          )
        })}
      </tbody>
    </StyledTable>
  )
}
