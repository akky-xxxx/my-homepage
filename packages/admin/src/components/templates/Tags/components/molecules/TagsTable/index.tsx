// import node_modules
import React from "react"
import { Checkbox, CheckMark } from "shared-items/dist/client"

// import components
import {
  StyledTable,
  StyledTr,
  StyledTh,
  StyledTd,
} from "../../atoms/StyledTable"

// main
export const TagsTable = () => (
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
      <StyledTr>
        <StyledTd>
          <Checkbox
            isChecked={false}
            // TODO: 仮実装
            // eslint-disable-next-line no-console
            handleChange={() => console.log("handleChange")}
          />
        </StyledTd>
        <StyledTd>タグ1</StyledTd>
        <StyledTd>
          <CheckMark isChecked />
        </StyledTd>
        <StyledTd>1,234</StyledTd>
        <StyledTd>2020/01/01 12:34:56</StyledTd>
        <StyledTd>2020/01/01 12:34:56</StyledTd>
      </StyledTr>

      <StyledTr>
        <StyledTd>
          <Checkbox
            isChecked={false}
            // TODO: 仮実装
            // eslint-disable-next-line no-console
            handleChange={() => console.log("handleChange")}
          />
        </StyledTd>
        <StyledTd>タグ2</StyledTd>
        <StyledTd>
          <CheckMark />
        </StyledTd>
        <StyledTd>1,234</StyledTd>
        <StyledTd>2020/01/01 12:34:56</StyledTd>
        <StyledTd>2020/01/01 12:34:56</StyledTd>
      </StyledTr>
    </tbody>
  </StyledTable>
)
