// import node_modules
import React, { FC } from "react"
import {
  Divider,
  Background,
  Modal,
  RootPortal,
} from "shared-items/dist/client"
import styled from "styled-components"

// import components
import { MainContents } from "@@/components/atoms/MainContents"
import { Heading2 } from "@@/components/atoms/Heading2"
import { SubMenu } from "./components/molecules/SubMenu"
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
    isShowAddModal,
    handleShowAddModal,
    handleHideAddModal,
  } = useTags(props)

  return (
    <div>
      <RootPortal>
        <Background onClick={handleHideAddModal} isShow={isShowAddModal}>
          <Modal
            title="タグを追加"
            width={400}
            isShow={isShowAddModal}
            hasHeader
            hasFooter
            hasCancelButton
            handleOkCallback={handleHideAddModal}
            handleCancelCallback={handleHideAddModal}
          >
            タグを追加モーダルのコンテンツ
          </Modal>
        </Background>
      </RootPortal>
      <MainContents>
        <HeaderWrapper>
          <Heading2>タグ編集</Heading2>
          <SubMenu handleShowAddModal={handleShowAddModal} />
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
