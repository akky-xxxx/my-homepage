// import node_modules
import React, { FC } from "react"
import { Background, Modal, RootPortal } from "shared-items/dist/client"

// main
type AdditionModalProps = {
  isShowAdditionModal: boolean
  handleHideAdditionModal: () => void
}
export const AdditionModal: FC<AdditionModalProps> = (props) => {
  const { isShowAdditionModal, handleHideAdditionModal } = props

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
          タグを追加モーダルのコンテンツ
        </Modal>
      </Background>
    </RootPortal>
  )
}
