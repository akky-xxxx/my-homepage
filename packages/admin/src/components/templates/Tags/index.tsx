// import node_modules
import React, { FC } from "react"
import { Divider } from "shared-items/dist/client"
import styled from "styled-components"

// import components
import { MainContents } from "@@/components/atoms/MainContents"
import { Heading2 } from "@@/components/atoms/Heading2"
import { SubMenu } from "./components/molecules/SubMenu"
import { TagsTable } from "./components/organisms/TagsTable"
import { AdditionModal } from "./components/organisms/AdditionModal"
import { ChangingModal } from "./components/organisms/ChangingModal"

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
    isShowAdditionModal,
    handleShowAdditionModal,
    handleHideAdditionModal,
    isShowChangingModal,
    handleShowChangingModal,
    handleHideChangingModal,
  } = useTags(props)

  return (
    <div>
      <AdditionModal
        isShowAdditionModal={isShowAdditionModal}
        handleHideAdditionModal={handleHideAdditionModal}
      />

      <ChangingModal
        isShowChangingModal={isShowChangingModal}
        handleHideChangingModal={handleHideChangingModal}
      />

      <MainContents>
        <HeaderWrapper>
          <Heading2>タグ編集</Heading2>
          <SubMenu
            handleShowAdditionModal={handleShowAdditionModal}
            handleShowChangingModal={handleShowChangingModal}
          />
        </HeaderWrapper>
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

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
`
