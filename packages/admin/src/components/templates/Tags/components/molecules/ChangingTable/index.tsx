// import node_modules
import React, { FC } from "react"
import { CheckMark } from "shared-items/dist/client"

// import others
import {
  StyledTable,
  StyledTr,
  StyledTh,
  StyledTd,
} from "../../atoms/StyledTable"
import { ChangingTableProps } from "./types"

// main
export const ChangingTable: FC<ChangingTableProps> = (props) => {
  const {
    selectedTags,
    isReleaseAll,
    handleChangeTagName,
    handleChangeRelease,
    handleChangeReleaseAll,
  } = props

  if (!selectedTags.length) return null

  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTh>タグ名</StyledTh>
          <StyledTh>
            <CheckMark
              isChecked={isReleaseAll}
              onClick={handleChangeReleaseAll}
            />
          </StyledTh>
        </tr>
      </thead>

      <tbody>
        {selectedTags.map((tag) => {
          const { tagId, tagName, isRelease } = tag
          return (
            <StyledTr key={tagId}>
              <StyledTd>
                <input
                  type="text"
                  value={tagName}
                  onChange={handleChangeTagName(tagId)}
                />
              </StyledTd>
              <StyledTd>
                <CheckMark
                  isChecked={isRelease}
                  onClick={handleChangeRelease(tagId)}
                />
              </StyledTd>
            </StyledTr>
          )
        })}
      </tbody>
    </StyledTable>
  )
}
