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
import PrefSelect from "./components/PrefSelect"

/**
 * import others
 */
import { State, HandleActions } from "../../../store/modules/pages/photo-gallery/types"
import originGalleryInfoList from "../../../shared/const/galleryInfoList"

/**
 * main
 */

export interface PhotoGalleryProps extends State, HandleActions {}

const PhotoGallery: NextPage<PhotoGalleryProps> = props => {
  const {
    handleOpenModal,
    handleCloseModal,
    handleSelectViewPref,
    isOpen,
    currentImageId,
    galleryInfoList,
    selectedViewPref,
  } = props

  // TODO: 型を整理して解決させる
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const filteredList: typeof originGalleryInfoList = galleryInfoList.filter(galleryInfo => {
    if (selectedViewPref === "00") return true
    return galleryInfo.prefCode === selectedViewPref
  })

  return (
    <Wrapper>
      <PrefSelect handleSelectViewPref={handleSelectViewPref} selectedViewPref={selectedViewPref} />
      <GalleryBody galleryInfoList={filteredList} handleOpenModal={handleOpenModal} />
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
  overflow-x: hidden;
  width: 100vw;
`

export default PhotoGallery
