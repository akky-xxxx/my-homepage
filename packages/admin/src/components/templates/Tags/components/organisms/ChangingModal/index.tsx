// import node_modules
import React, { FC } from "react"
import { Background, Modal, RootPortal } from "shared-items/dist/client"

// main
type ChangingModalProps = {
  isShowChangingModal: boolean
  handleHideChangingModal: () => void
}

export const ChangingModal: FC<ChangingModalProps> = (props) => {
  const { isShowChangingModal, handleHideChangingModal } = props

  return (
    <RootPortal>
      <Background
        onClick={handleHideChangingModal}
        isShow={isShowChangingModal}
      >
        <Modal
          title="タグを変更"
          width={400}
          isShow={isShowChangingModal}
          hasHeader
          hasFooter
          hasCancelButton
          handleOkCallback={handleHideChangingModal}
          handleCancelCallback={handleHideChangingModal}
        >
          タグを変更モーダルのコンテンツ
        </Modal>
      </Background>
    </RootPortal>
  )
}
