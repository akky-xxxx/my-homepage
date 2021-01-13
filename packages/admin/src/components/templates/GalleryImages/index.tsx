// import node_modules
import React, { FC } from "react"
import { Divider, Margin } from "shared-items/dist/client"
import styled from "styled-components"

// import components
import { MainContents } from "@@/components/atoms/MainContents"
import { Heading2 } from "@@/components/atoms/Heading2"
import { GalleryImages as Images } from "@@/components/organisms/GalleryImages"
import { ConditionArea } from "./components/organisms/ConditionArea"

// import types
import { GalleryImagesProps } from "./types"

// main
const { MARGIN25 } = Margin
export const GalleryImages: FC<GalleryImagesProps> = (props) => {
  const { condition: _condition, images: _images } = props

  const condition = {
    ..._condition,
    selectedPrefecture: null,
    accentDates: [],
    selectedTags: [],
    photographAtStart: null,
    photographAtEnd: null,
    /* eslint-disable no-console */
    handleSelectPhotographAtStart: () =>
      console.log("handleSelectPhotographAtStart"),
    handleSelectPhotographAtEnd: () =>
      console.log("handleSelectPhotographAtEnd"),
    handleSelectPrefecture: () => console.log("handleSelectPrefecture"),
    handleSelectTags: () => console.log("handleSelectTags"),
    handleResetConditions: () => console.log("handleResetConditions"),
    /* eslint-enable no-console */
  }

  const images = _images.map((image) => ({
    ...image,
    /* eslint-disable no-console */
    handleClickPrimary: () => console.log("handleClickPrimary"),
    handleClickRemove: () => console.log("handleClickRemove"),
    handleSelectPhotographAt: () => console.log("handleSelectPhotographAt"),
    handleSelectPrefecture: () => console.log("handleSelectPrefecture"),
    handleSelectTags: () => console.log("handleSelectTags"),
    /* eslint-enable no-console */
  }))

  return (
    <div>
      <MainContents>
        <HeaderWrapper>
          <Heading2>画像一覧</Heading2>
        </HeaderWrapper>
      </MainContents>

      <Divider />

      <MainContents>
        <ConditionArea {...condition} />

        <StyledDivider />

        <Images images={images} />
      </MainContents>
    </div>
  )
}

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
`

const StyledDivider = styled(Divider)`
  margin-bottom: ${MARGIN25}px;
  margin-top: ${MARGIN25}px;
`
