// import node_modules
import React, { FC } from "react"
import { EmptyFunction } from "shared-items"
import { Background, Modal, RootPortal } from "shared-items/dist/client"

// import others
import { useAdditionalModal } from "./modules/useAdditionalModal"

// main
export type AdditionModalProps = {
  isShowAdditionModal: boolean
  handleHideAdditionModal: EmptyFunction
}

export const AdditionModal: FC<AdditionModalProps> = (props) => {
  const { isShowAdditionModal, handleHideAdditionModal } = props
  const { newTagName, handleChangeNewTagName } = useAdditionalModal()

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
          handleOkCallback={handleHideAdditionModal}
          handleCancelCallback={handleHideAdditionModal}
        >
          <input value={newTagName} onChange={handleChangeNewTagName} />
        </Modal>
      </Background>
    </RootPortal>
  )
}
