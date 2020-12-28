// import node_modules
import React, { FC, memo } from "react"
import { CheckMark } from "shared-items/dist/client"

// import others
import { TagsTableRecordStates } from "../TagsTableRecord/types"
import {
  StyledTable,
  StyledTr,
  StyledTh,
  StyledTd,
} from "../../atoms/StyledTable"
import { useChangingTable } from "../../organisms/ChangingModal/modules/useChangingTable"

// main
export type ChangingTableProps = {
  isShow: boolean
  selectedTags: TagsTableRecordStates[]
}

export const ChangingTable: FC<ChangingTableProps> = memo(
  (props) => {
    const { selectedTags, isShow } = props
    const {
      stateTags,
      isReleaseAll,
      handleChangeTagName,
      handleChangeRelease,
      handleChangeReleaseAll,
    } = useChangingTable({ originTags: selectedTags, isShow })

    if (!stateTags.length) return null

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
          {stateTags.map((tag) => {
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
  },
  (before, after) => before.isShow === after.isShow,
)
