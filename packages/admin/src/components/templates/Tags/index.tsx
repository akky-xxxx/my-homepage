// import node_modules
import React from "react"
import { Divider } from "shared-items/dist/client"

// import components
import { MainContents } from "@@/components/atoms/MainContents"
import { Heading2 } from "@@/components/atoms/Heading2"

// main
export const Tags = () => (
  <div>
    <MainContents>
      <Heading2>タグ編集</Heading2>
    </MainContents>

    <Divider />

    <MainContents>
      <h2>タグコンテンツ</h2>
    </MainContents>
  </div>
)
