/**
 * import node_modules
 */
import React from "react"
import { NextPage } from "next"
import { uniq } from "remeda"

/**
 * import components
 */
import ContentWrapper from "../../molecules/contentWrapper"
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

const PhotoGallery: NextPage<PhotoGalleryProps> = (props) => {
  const {
    selectedViewDate,
    handleOpenModal,
    handleCloseModal,
    handleSelectViewPref,
    handleResetViewPref,
    handleSelectViewTag,
    selectedViewPref,
    handleResetViewTag,
    selectedViewTags,
    handleSelectViewDate,
    handleResetViewDate,
    modal: { isOpen, currentImageId },
  } = props

  const filteredList: GalleryItem[] = useFilteredList({
    galleryInfoList,
    selectedViewPref,
    selectedViewTags,
    selectedViewDate,
  })

  const tags: string[] = uniq(galleryInfoList.map((galleryInfo) => galleryInfo.tags).flat()).sort()

  return (
    <ContentWrapper>
      <CustomHead title="Photo Gallery" />
      <PageAbove title="Photo Gallery" />
      <MainContentWrapper>
        <MainContent
          galleryItem={filteredList}
          tags={tags}
          selectedViewPref={selectedViewPref}
          selectedViewTags={selectedViewTags}
          selectedViewDate={selectedViewDate}
          handleOpenModal={handleOpenModal}
          handleSelectViewPref={handleSelectViewPref}
          handleResetViewPref={handleResetViewPref}
          handleSelectViewTag={handleSelectViewTag}
          handleResetViewTag={handleResetViewTag}
          handleSelectViewDate={handleSelectViewDate}
          handleResetViewDate={handleResetViewDate}
        />
      </MainContentWrapper>
      <GalleryModal
        galleryInfoList={filteredList}
        currentImageId={currentImageId}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
      />
    </ContentWrapper>
  )
}

export default PhotoGallery
