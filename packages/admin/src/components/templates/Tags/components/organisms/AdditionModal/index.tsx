// import node_modules
import React, { FC } from "react"
import { EmptyFunction } from "shared-items"
import { Background, Modal, RootPortal } from "shared-items/dist/client"

// import others
import { useAdditionalModal } from "./modules/useAdditionalModal"
import { HandleAddTagsMain } from "./modules/useAdditionalModal/types"

// main
export type AdditionModalProps = {
  isShowAdditionModal: boolean
  handleHideAdditionModal: EmptyFunction
  handleAddTagsMain: HandleAddTagsMain
}

export const AdditionModal: FC<AdditionModalProps> = (props) => {
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
          hasCancelButton
          handleOkCallback={handleAddTags}
          handleCancelCallback={handleHideAdditionModal}
        >
          {newTagNames.map((newTagName) => {
            const { id, value } = newTagName
            return (
              <div key={id}>
                <input value={value} onChange={handleChangeNewTagName(id)} />
              </div>
            )
          })}
        </Modal>
      </Background>
    </RootPortal>
  )
}
