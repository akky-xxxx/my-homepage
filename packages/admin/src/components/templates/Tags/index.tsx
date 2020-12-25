// import node_modules
import React, { FC } from "react"
import { Divider } from "shared-items/dist/client"

// import components
import { MainContents } from "@@/components/atoms/MainContents"
import { Heading2 } from "@@/components/atoms/Heading2"
import { TagsTable } from "./components/organisms/TagsTable"

// import others
import { TagsProps } from "./types"
import { useTags } from "./modules/useTags"

// main
export const Tags: FC<TagsProps> = (props) => {
  const {
    isSelectAll,
    handleClickSelectAll,
    tags,
    handleClickSelect,
    handleClickRelease,
  } = useTags(props)

  return (
    <div>
      <MainContents>
        <Heading2>タグ編集</Heading2>
      </MainContents>

      <Divider />

      <MainContents>
        <TagsTable
          isSelectAll={isSelectAll}
          handleClickSelectAll={handleClickSelectAll}
          tags={tags}
          handleClickSelect={handleClickSelect}
          handleClickRelease={handleClickRelease}
        />
      </MainContents>
    </div>
  )
}
