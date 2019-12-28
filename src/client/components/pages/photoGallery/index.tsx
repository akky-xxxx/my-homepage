/**
 * import node_modules
 */
import React from "react"
import { NextPage } from "next"
import styled from "styled-components"
import { InputLabel, Select, MenuItem } from "@material-ui/core"

/**
 * import components
 */
import GalleryBody from "./components/galleryBody"
import GalleryModal from "./components/galleryModal"

/**
 * import others
 */
import { State, HandleActions, ViewPref } from "../../../store/modules/pages/photo-gallery/types"
import PREF_MAP from "../../../shared/const/prefMap"
import originGalleryInfoList from "../../../shared/const/galleryInfoList"

/**
 * main
 */

export interface PhotoGalleryProps extends State, HandleActions {}

type ViewPrefOptions = {
  [K in ViewPref]: string
}

const viewPrefOptionsBase: ViewPrefOptions = {
  ...PREF_MAP,
  "00": "全て",
} as const

interface ViewPrefOption {
  code: string
  label: string
}

const viewPrefOptions: ViewPrefOption[] = (Object.keys(viewPrefOptionsBase) as ViewPref[])
  .map(key => ({
    code: key,
    label: viewPrefOptionsBase[key],
  }))
  .sort((a, b) => {
    if (a.code > b.code) return 1
    return -1
  })

const PhotoGallery: NextPage<PhotoGalleryProps> = props => {
  const {
    handleOpenModal,
    handleCloseModal,
    handleChangeNextImage,
    handleChangePrevImage,
    handleSelectViewPref,
    isOpen,
    currentImageId,
    galleryInfoList,
    viewPref,
  } = props

  // TODO: 型を整理して解決させる
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const filteredList: typeof originGalleryInfoList = galleryInfoList.filter(galleryInfo => {
    if (viewPref === "00") return true
    return galleryInfo.prefCode === viewPref
  })

  return (
    <Wrapper>
      <div>
        <InputLabel id="demo-simple-select-label">地域</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={viewPref}
          onChange={event => handleSelectViewPref({ targetPref: event.target.value as ViewPref })}
        >
          {viewPrefOptions.map(prefData => {
            const { code, label } = prefData
            return (
              <MenuItem key={code} value={code}>
                {label}
              </MenuItem>
            )
          })}
        </Select>
      </div>
      <GalleryBody galleryInfoList={filteredList} handleOpenModal={handleOpenModal} />
      <GalleryModal
        galleryInfoList={filteredList}
        currentImageId={currentImageId}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        handleChangeNextImage={handleChangeNextImage}
        handleChangePrevImage={handleChangePrevImage}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow-x: hidden;
  width: 100vw;
`

export default PhotoGallery
