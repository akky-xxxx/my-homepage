/**
 * import node_modules
 */
import React, { FC } from "react"
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core"
import styled from "styled-components"

/**
 * import others
 */
import PREF_MAP, { PrefCode } from "../../../../../shared/const/prefMap"

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

  if (!prefCode || !imagePath) return null

  return (
    <StyledDialog
      open={isOpen}
      onClose={handleCloseModal}
      maxWidth={false}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{PREF_MAP[prefCode]}</DialogTitle>
      <StyledDialogContent dividers>
        <StyledImage src={imagePath} alt="" />
      </StyledDialogContent>
    </StyledDialog>
  )
}

const StyledDialog = styled(Dialog)`
  height: 100%;

  .MuiPaper-root {
    height: 100%;
  }
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
