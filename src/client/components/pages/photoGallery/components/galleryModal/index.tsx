/**
 * import node_modules
 */
import React, { FC } from "react"
import { Dialog, DialogTitle, DialogContent, DialogContentText } from "@material-ui/core"
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
    <Dialog
      open={isOpen}
      onClose={handleCloseModal}
      scroll="paper"
      maxWidth={false}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{PREF_MAP[prefCode]}</DialogTitle>
      <DialogContent dividers>
        <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
          <StyledImage src={imagePath} alt="" />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

const StyledImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`

export default GalleryModal
