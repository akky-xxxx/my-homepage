// import node_modules
import React, { FC } from "react"
import { Checkbox, CheckMark } from "shared-items/dist/client"

// import components
import {
  StyledTable,
  StyledTr,
  StyledTh,
  StyledTd,
} from "../../atoms/StyledTable"

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
          const {
            id,
            isSelected,
            tagName,
            isReleased,
            settingCount,
            createdAt,
            updatedAt,
          } = tag

          return (
            <StyledTr key={id}>
              <StyledTd>
                <Checkbox
                  isChecked={isSelected}
                  // TODO: 仮実装
                  // eslint-disable-next-line no-console
                  handleChange={() => console.log("handleChange")}
                />
              </StyledTd>
              <StyledTd>{tagName}</StyledTd>
              <StyledTd>
                <CheckMark isChecked={isReleased} />
              </StyledTd>
              <StyledTd>{settingCount}</StyledTd>
              <StyledTd>{createdAt}</StyledTd>
              <StyledTd>{updatedAt}</StyledTd>
            </StyledTr>
          )
        })}
      </tbody>
    </StyledTable>
  )
}
