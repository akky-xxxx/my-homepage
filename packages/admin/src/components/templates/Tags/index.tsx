// import node_modules
import React, { FC } from "react"
import { Divider } from "shared-items/dist/client"
import styled from "styled-components"
import Select from "react-select"

// import components
import { MainContents } from "@@/components/atoms/MainContents"
import { Heading2 } from "@@/components/atoms/Heading2"
import { Loading } from "@@/components/atoms/Loading"
import { SelectOption } from "@@/shared/types/lib"
import { SubMenu } from "./components/molecules/SubMenu"
import { TagsTable } from "./components/organisms/TagsTable"
import { AdditionModal } from "./components/organisms/AdditionModal"
import { ChangingModal } from "./components/organisms/ChangingModal"
import { DeletingModal } from "./components/organisms/DeletingModal"

// import others
import { TagsProps } from "./types"
import { useTags } from "./modules/useTags"

// main
export const Tags: FC<TagsProps> = (props) => {
  const {
    handleUpdateTagsMain,
    handleAddTagsMain,
    handleDeleteTagsMain,
    isLoading,
    isTagsLoading,
  } = props
  const {
    isSelectAll,
    isSelectSome,
    handleClickSelectAll,
    tags,
    selectedTags,
    selectOptions,
    selectedOptions,
    handleClickSelect,
    handleClickRelease,
    isShowAdditionModal,
    handleShowAdditionModal,
    handleHideAdditionModal,
    isShowChangingModal,
    handleShowChangingModal,
    handleHideChangingModal,
    isShowDeletingModal,
    handleShowDeletingModal,
    handleHideDeletingModal,
    handleSelectOptions,
  } = useTags(props)

  return (
    <div>
      <MainContents>
        <HeaderWrapper>
          <Heading2>タグ編集</Heading2>
          <SubMenu
            isSelectSome={isSelectSome}
            handleShowAdditionModal={handleShowAdditionModal}
            handleShowChangingModal={handleShowChangingModal}
            handleShowDeletingModal={handleShowDeletingModal}
          />
        </HeaderWrapper>
      </MainContents>

      <Divider />

      <MainContents>
        <Select<SelectOption, true>
          options={selectOptions}
          placeholder="タグを選択"
          value={selectedOptions}
          onChange={handleSelectOptions}
          closeMenuOnSelect={false}
          isClearable
          isMulti
          isSearchable
        />
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

      <Loading isShow={isLoading || isTagsLoading} />

      <AdditionModal
        handleAddTagsMain={handleAddTagsMain}
        isShowAdditionModal={isShowAdditionModal}
        handleHideAdditionModal={handleHideAdditionModal}
      />

      <ChangingModal
        selectedTags={selectedTags}
        isShowChangingModal={isShowChangingModal}
        handleHideChangingModal={handleHideChangingModal}
        handleUpdateTagsMain={handleUpdateTagsMain}
      />

      <DeletingModal
        selectedTags={selectedTags}
        isShowDeletingModal={isShowDeletingModal}
        handleHideDeletingModal={handleHideDeletingModal}
        handleDeleteTagsMain={handleDeleteTagsMain}
      />
    </div>
  )
}

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
`
