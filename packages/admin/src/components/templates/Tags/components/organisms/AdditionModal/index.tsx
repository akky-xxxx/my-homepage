// import node_modules
import React, { FC, memo } from "react"
import { EmptyFunction } from "shared-items"
import { Background, Modal, RootPortal } from "shared-items/dist/client"

// import components
import { StyledList, StyledListItem } from "../../atoms/StyledList"

// import others
import { useAdditionalModal } from "./modules/useAdditionalModal"
import { HandleAddTagsMain } from "./modules/useAdditionalModal/types"

// main
export type AdditionModalProps = {
  isShowAdditionModal: boolean
  handleHideAdditionModal: EmptyFunction
  handleAddTagsMain: HandleAddTagsMain
}

export const AdditionModal: FC<AdditionModalProps> = memo(
  (props) => {
    const {
      isShowAdditionModal,
      handleHideAdditionModal,
      handleAddTagsMain,
    } = props
    const {
      newTagNames,
      handleChangeNewTagName,
      handleAddTags,
    } = useAdditionalModal({
      handleAddTagsMain,
      handleHideAdditionModal,
    })

    return (
      <RootPortal>
        <Background
          onClick={handleHideAdditionModal}
          isShow={isShowAdditionModal}
        >
          <Modal
            title="タグを追加"
            width={400}
            isShow={isShowAdditionModal}
            hasHeader
            hasFooter
            okText="追加"
            hasCancelButton
            handleOkCallback={handleAddTags}
            handleCancelCallback={handleHideAdditionModal}
          >
            <StyledList>
              {newTagNames.map((newTagName) => {
                const { id, value } = newTagName
                return (
                  <StyledListItem key={id}>
                    <input
                      value={value}
                      onChange={handleChangeNewTagName(id)}
                    />
                  </StyledListItem>
                )
              })}
            </StyledList>
          </Modal>
        </Background>
      </RootPortal>
    )
  },
  (before, after) => before.isShowAdditionModal === after.isShowAdditionModal,
)
