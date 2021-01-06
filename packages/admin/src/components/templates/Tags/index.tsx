// import node_modules
import React, { FC } from "react"
import { Divider, Margin } from "shared-items/dist/client"
import styled from "styled-components"

// import components
import { MainContents } from "@@/components/atoms/MainContents"
import { Heading2 } from "@@/components/atoms/Heading2"
import { Loading } from "@@/components/atoms/Loading"
import { Pagination } from "@@/components/molecules/Pagination"
import { SubMenu } from "./components/molecules/SubMenu"
import { TagsTable } from "./components/organisms/TagsTable"
import { AdditionModal } from "./components/organisms/AdditionModal"
import { ChangingModal } from "./components/organisms/ChangingModal"
import { DeletingModal } from "./components/organisms/DeletingModal"
import { ConditionArea } from "./components/organisms/ConditionArea"

// import others
import { TagsProps } from "./types"
import { useTags } from "./modules/useTags"

// main
const { MARGIN20, MARGIN25 } = Margin

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
    selectedTags,
    displayTags,
    selectOptions,
    selectedOptions,
    filterText,
    maxPages,
    currentPage,
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
    handleChangeFilterText,
    handleClickPagination,
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
        <ConditionArea
          filterText={filterText}
          selectOptions={selectOptions}
          selectedOptions={selectedOptions}
          handleChangeFilterText={handleChangeFilterText}
          handleSelectOptions={handleSelectOptions}
          createStartDate={null}
          createEndDate={null}
          updateStartDate={null}
          updateEndDate={null}
          // TODO: 仮実装
          /* eslint-disable no-console */
          handleChangeCreateStartDate={() =>
            console.log("handleChangeCreateStartDate")
          }
          handleChangeCreateEndDate={() =>
            console.log("handleChangeCreateEndDate")
          }
          handleChangeUpdateStartDate={() =>
            console.log("handleChangeUpdateStartDate")
          }
          handleChangeUpdateEndDate={() =>
            console.log("handleChangeUpdateEndDate")
          }
          /* eslint-enable no-console */
        />

        <StyledDivider />

        <TagsTable
          isSelectAll={isSelectAll}
          handleClickSelectAll={handleClickSelectAll}
          tags={displayTags}
          handleClickSelect={handleClickSelect}
          handleClickRelease={handleClickRelease}
        />

        <PaginationWrapper>
          <Pagination
            maxPages={maxPages}
            currentPage={currentPage}
            handleClickPagination={handleClickPagination}
          />
        </PaginationWrapper>
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

const StyledDivider = styled(Divider)`
  margin-bottom: ${MARGIN25}px;
  margin-top: ${MARGIN25}px;
`

const PaginationWrapper = styled.div`
  margin-top: ${MARGIN20}px;
  text-align: center;
`
