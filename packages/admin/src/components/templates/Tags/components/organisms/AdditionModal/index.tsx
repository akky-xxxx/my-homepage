// import node_modules
import React, { FC } from "react"
import { Background, Modal, RootPortal } from "shared-items/dist/client"

// main
type AdditionModalProps = {
  isShowAddModal: boolean
  handleHideAddModal: () => void
}
export const AdditionModal: FC<AdditionModalProps> = (props) => {
  const { isShowAddModal, handleHideAddModal } = props

  return (
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
  )
}
