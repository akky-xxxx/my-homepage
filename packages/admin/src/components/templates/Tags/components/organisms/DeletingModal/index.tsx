// import node_modules
import React, { FC } from "react"
import { EmptyFunction } from "shared-items"
import { Background, Modal, RootPortal } from "shared-items/dist/client"

// main
export type DeletingModalProps = {
  isShowDeletingModal: boolean
  handleHideDeletingModal: EmptyFunction
}

export const DeletingModal: FC<DeletingModalProps> = (props) => {
  const { isShowDeletingModal, handleHideDeletingModal } = props

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
          handleOkCallback={handleHideDeletingModal}
          handleCancelCallback={handleHideDeletingModal}
        >
          タグ削除モーダルのコンテンツ
        </Modal>
      </Background>
    </RootPortal>
  )
}
