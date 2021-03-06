// import node_modules
import React, { FC, memo } from "react"
import { EmptyFunction } from "shared-items"
import { Background, Modal, RootPortal } from "shared-items/dist/client"

// import components
import { ChangingTable } from "../../molecules/ChangingTable"

// import others
import { TagsTableRecordStates } from "../../molecules/TagsTableRecord/types"
import { useChangingModal } from "./modules/useChangingModal"
import { HandleUpdateTagsMain } from "./modules/useChangingModal/types"

// main
export type ChangingModalProps = {
  selectedTags: TagsTableRecordStates[]
  isShowChangingModal: boolean
  handleHideChangingModal: EmptyFunction
  handleUpdateTagsMain: HandleUpdateTagsMain
}

export const ChangingModal: FC<ChangingModalProps> = memo(
  (props) => {
    const {
      isShowChangingModal,
      handleHideChangingModal,
      handleUpdateTagsMain,
      selectedTags: originTags,
    } = props
    const {
      selectedTags,
      isReleaseAll,
      handleChangeTagName,
      handleChangeRelease,
      handleChangeReleaseAll,
      handleUpdateTags,
    } = useChangingModal({
      originTags,
      handleUpdateTagsMain,
      handleHideChangingModal,
    })

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
            handleOkCallback={handleUpdateTags}
            handleCancelCallback={handleHideChangingModal}
          >
            <ChangingTable
              selectedTags={selectedTags}
              isReleaseAll={isReleaseAll}
              handleChangeTagName={handleChangeTagName}
              handleChangeRelease={handleChangeRelease}
              handleChangeReleaseAll={handleChangeReleaseAll}
            />
          </Modal>
        </Background>
      </RootPortal>
    )
  },
  (before, after) => before.isShowChangingModal === after.isShowChangingModal,
)
