/**
 * import node_modules
 */
import React, { FC, useRef } from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@material-ui/core"
import { Fullscreen } from "@material-ui/icons"
import styled from "styled-components"

/**
 * import others
 */
import PREF_MAP, { PrefCode } from "../../../../../shared/const/prefMap"
import handleToFullScreen from "../../../../../shared/utils/handleToFullScreen"

/**
 * main
 */
export interface ModalStatus {
  imagePath: string
  isOpen: boolean
  prefCode: "" | PrefCode
}

interface GalleryModalProps {
  modalStatus: ModalStatus
  handleCloseModal: () => void
}

const GalleryModal: FC<GalleryModalProps> = props => {
  const {
    modalStatus: { imagePath, isOpen, prefCode },
    handleCloseModal,
  } = props

  const fullScreenRef = useRef<HTMLImageElement>(null)

  if (!prefCode || !imagePath) return null

  return (
    <StyledDialog
      open={isOpen}
      onClose={handleCloseModal}
      maxWidth={false}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <ModalHeader>
        <DialogTitle id="scroll-dialog-title">{PREF_MAP[prefCode]}</DialogTitle>
        <StyledFullscreen fontSize="large" onClick={() => handleToFullScreen(fullScreenRef.current)} />
      </ModalHeader>
      <StyledDialogContent dividers>
        <StyledImage src={imagePath} alt="" ref={fullScreenRef} />
      </StyledDialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal} variant="contained">
          閉じる
        </Button>
      </DialogActions>
    </StyledDialog>
  )
}

const StyledDialog = styled(Dialog)`
  height: 100%;

  .MuiPaper-root {
    height: auto;
  }
`

const ModalHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-right: 18px;
`

const StyledFullscreen = styled(Fullscreen)`
  cursor: pointer;
`

const StyledDialogContent = styled(DialogContent)`
  height: 100%;
  text-align: center;
`

const StyledImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`

export default GalleryModal
