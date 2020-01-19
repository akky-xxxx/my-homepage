/**
 * import node_modules
 */
import React from "react"
import { NextPage } from "next"
import styled from "styled-components"

/**
 * import components
 */
import CustomHead from "../../molecules/customHead"
import PageAbove from "../../molecules/pageAbove"
import MainContentWrapper from "../../molecules/mainContentWrapper"
import MainContent from "./components/mainContent"
import GalleryModal from "./components/galleryModal"

/**
 * import others
 */
import { State, HandleActions } from "../../../store/modules/pages/photo-gallery/types"
import galleryInfoList from "../../../shared/const/galleryInfoList"
import { GalleryItem } from "../../../shared/types/pages/galleryList"

/**
 * main
 */
export interface PhotoGalleryProps extends State, HandleActions {}

const PhotoGallery: NextPage<PhotoGalleryProps> = props => {
  const {
    handleOpenModal,
    handleCloseModal,
    handleSelectViewPref,
    selectedViewPref,
    modal: { isOpen, currentImageId },
  } = props

  const filteredList: GalleryItem[] = galleryInfoList.filter(galleryInfo => {
    if (selectedViewPref === "00") return true
    return galleryInfo.prefCode === selectedViewPref
  })

  return (
    <Wrapper>
      <CustomHead title="Photo Gallery" />
      <PageAbove title="Photo Gallery" />
      <MainContentWrapper>
        <MainContent
          selectedViewPref={selectedViewPref}
          handleOpenModal={handleOpenModal}
          handleSelectViewPref={handleSelectViewPref}
        />
      </MainContentWrapper>
      <GalleryModal
        galleryInfoList={filteredList}
        currentImageId={currentImageId}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

export default PhotoGallery
