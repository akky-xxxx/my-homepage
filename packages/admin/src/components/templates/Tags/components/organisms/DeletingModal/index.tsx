// import node_modules
import React, { FC, memo } from "react"
import { EmptyFunction } from "shared-items"
import { Background, Modal, RootPortal } from "shared-items/dist/client"
import { TagsTableRecordStates } from "../../molecules/TagsTableRecord/types"

// import components
import { StyledList, StyledListItem } from "../../atoms/StyledList"

// main
export type DeletingModalProps = {
  selectedTags: TagsTableRecordStates[]
  isShowDeletingModal: boolean
  handleHideDeletingModal: EmptyFunction
}

export const DeletingModal: FC<DeletingModalProps> = memo(
  (props) => {
    const { selectedTags, isShowDeletingModal, handleHideDeletingModal } = props

    return (
      <RootPortal>
        <Background
          onClick={handleHideDeletingModal}
          isShow={isShowDeletingModal}
        >
          <Modal
            title="タグを削除"
            width={400}
            isShow={isShowDeletingModal}
            hasHeader
            hasFooter
            hasCancelButton
            okText="削除"
            handleOkCallback={handleHideDeletingModal}
            handleCancelCallback={handleHideDeletingModal}
          >
            <StyledList>
              {selectedTags.map((selectedTag) => {
                const { tagId, tagName } = selectedTag
                return <StyledListItem key={tagId}>{tagName}</StyledListItem>
              })}
            </StyledList>
          </Modal>
        </Background>
      </RootPortal>
    )
  },
  (before, after) => before.isShowDeletingModal === after.isShowDeletingModal,
)
