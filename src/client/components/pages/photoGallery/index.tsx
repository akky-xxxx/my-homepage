/**
 * import node_modules
 */
import React from "react"
import { NextPage } from "next"
import styled from "styled-components"
import { uniq } from "remeda"

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
import useFilteredList from "./useFilteredList"

/**
 * main
 */
export interface PhotoGalleryProps extends State, HandleActions {}

const PhotoGallery: NextPage<PhotoGalleryProps> = props => {
  const {
    handleOpenModal,
    handleCloseModal,
    handleSelectViewPref,
    handleResetViewPref,
    handleSelectViewTag,
    selectedViewPref,
    handleResetViewTag,
    selectedViewTags,
    modal: { isOpen, currentImageId },
  } = props

  const filteredList: GalleryItem[] = useFilteredList({
    galleryInfoList,
    selectedViewPref,
    selectedViewTags,
  })

  const tags: string[] = uniq(galleryInfoList.map(galleryInfo => galleryInfo.tags).flat()).sort()

  return (
    <Wrapper>
      <CustomHead title="Photo Gallery" />
      <PageAbove title="Photo Gallery" />
      <MainContentWrapper>
        <MainContent
          galleryItem={filteredList}
          tags={tags}
          selectedViewPref={selectedViewPref}
          selectedViewTags={selectedViewTags}
          handleOpenModal={handleOpenModal}
          handleSelectViewPref={handleSelectViewPref}
          handleResetViewPref={handleResetViewPref}
          handleSelectViewTag={handleSelectViewTag}
          handleResetViewTag={handleResetViewTag}
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
  flex-grow: 1;
  flex-shrink: 0;
  position: relative;
  width: 100vw;
`

export default PhotoGallery
