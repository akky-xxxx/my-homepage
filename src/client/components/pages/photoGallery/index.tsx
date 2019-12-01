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
import useModal from "./modules/useModal"

/**
 * main
 */

const PhotoGallery: NextPage = () => {
  const [modalStatus, handleOpenModal, handleCloseModal] = useModal()

  return (
    <Wrapper>
      <GalleryBody handleOpenModal={handleOpenModal} />
      <GalleryModal modalStatus={modalStatus} handleCloseModal={handleCloseModal} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow-x: hidden;
  width: 100vw;
`

export default PhotoGallery
