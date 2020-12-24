// import node_modules
import React from "react"
import { Divider } from "shared-items/dist/client"

// import components
import { MainContents } from "@@/components/atoms/MainContents"
import { Heading2 } from "@@/components/atoms/Heading2"
import { TagsTable } from "./components/organisms/TagsTable"

// main
export const Tags = () => (
  <div>
    <MainContents>
      <Heading2>タグ編集</Heading2>
    </MainContents>

    <Divider />

    <MainContents>
      <TagsTable tags={[]} />
    </MainContents>
  </div>
)
