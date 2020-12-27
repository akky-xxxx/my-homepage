// import node_modules
import React, { FC } from "react"
import { EmptyFunction } from "shared-items"
import { Background, Modal, RootPortal } from "shared-items/dist/client"

// import components
import { ChangingTable } from "../../molecules/ChangingTable"

// import others
import { TagsTableRecordStates } from "../../molecules/TagsTableRecord/types"

// main
type ChangingModalProps = {
  selectedTags: TagsTableRecordStates[]
  isShowChangingModal: boolean
  handleHideChangingModal: EmptyFunction
}

export const ChangingModal: FC<ChangingModalProps> = (props) => {
  const { isShowChangingModal, handleHideChangingModal, selectedTags } = props

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
          okText="変更"
          handleOkCallback={handleHideChangingModal}
          handleCancelCallback={handleHideChangingModal}
        >
          <ChangingTable selectedTags={selectedTags} />
        </Modal>
      </Background>
    </RootPortal>
  )
}
