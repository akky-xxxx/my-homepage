/**
 * import node_modules
 */
import React from "react"
import { NextPage } from "next"
import styled from "styled-components"

/**
 * import components
 */
import GalleryBody from "./components/galleryBody"
import GalleryModal from "./components/galleryModal"

/**
 * import others
 */
import { State, HandleActions } from "../../../store/modules/pages/photo-gallery/types"

/**
 * main
 */

export interface PhotoGalleryProps extends State, HandleActions {}

const PhotoGallery: NextPage<PhotoGalleryProps> = props => {
  const { handleOpenModal, handleCloseModal, isOpen, currentImageId, galleryInfoList } = props

  return (
    <Wrapper>
      <GalleryBody galleryInfoList={galleryInfoList} handleOpenModal={handleOpenModal} />
      <GalleryModal
        galleryInfoList={galleryInfoList}
        currentImageId={currentImageId}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow-x: hidden;
  width: 100vw;
`

export default PhotoGallery
