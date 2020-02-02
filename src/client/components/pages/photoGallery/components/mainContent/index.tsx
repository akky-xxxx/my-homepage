/**
 * import node_modules
 */
import React, { FC } from "react"
import styled from "styled-components"
import { Grid, Divider, createMuiTheme } from "@material-ui/core"

/**
 * import components
 */
import GalleryBody from "../galleryBody"
import GalleryLength from "../galleryLength"
import ResetFilter from "../resetFilter"
import PrefSelect from "../prefSelect"
import TagSelect from "../tagSelect"

/**
 * import others
 */
import { State, HandleActions } from "../../../../../store/modules/pages/photo-gallery/types"
import { GalleryItem } from "../../../../../shared/types/pages/galleryList"
import { APP_BREAKPOINTS, APP_MARGINS } from "../../../../../shared/const/styles"

/**
 * main
 */
type PickProps =
  | "handleOpenModal"
  | "handleSelectViewPref"
  | "handleSelectViewTag"
  | "handleResetViewPref"
  | "handleResetViewTag"

export interface MainContentProps
  extends Pick<State, "selectedViewPref" | "selectedViewTags">,
    Pick<HandleActions, PickProps> {
  galleryItem: GalleryItem[]
  selectedViewTags: string[]
  tags: string[]
}

const { palette, spacing } = createMuiTheme()

const MainContent: FC<MainContentProps> = props => {
  const {
    galleryItem,
    handleOpenModal,
    handleSelectViewPref,
    handleResetViewPref,
    handleSelectViewTag,
    handleResetViewTag,
    selectedViewPref,
    selectedViewTags,
    tags,
  } = props

  const handleResetFilter = () => {
    handleResetViewPref()
    handleResetViewTag()
  }

  return (
    <Grid container>
      <LeftCol>
        <GalleryBody
          galleryInfoList={galleryItem}
          selectedViewTags={selectedViewTags}
          handleOpenModal={handleOpenModal}
          handleSelectViewTag={handleSelectViewTag}
        />
      </LeftCol>
      <RightCol>
        <RightColInner>
          <GalleryLengthWrapper>
            <GalleryLength resultLength={galleryItem.length} />
          </GalleryLengthWrapper>

          <DividerWrapper>
            <Divider />
          </DividerWrapper>

          <ConditionItems>
            <PrefSelect handleSelectViewPref={handleSelectViewPref} selectedViewPref={selectedViewPref} />
            <TagSelect tags={tags} selectedViewTags={selectedViewTags} handleSelectViewTag={handleSelectViewTag} />
            <ResetFilter handleResetFilter={handleResetFilter} />
          </ConditionItems>
        </RightColInner>
      </RightCol>
    </Grid>
  )
}

const RIGHT_COL_WIDTH = 200
const LeftCol = styled.div`
  ${APP_BREAKPOINTS.PC} {
    padding-top: ${APP_MARGINS.PC.VERTICAL}px;
    width: calc(100% - ${RIGHT_COL_WIDTH}px);
  }
`

const RightCol = styled.div`
  ${APP_BREAKPOINTS.PC} {
    border-left: 1px solid ${palette.divider};
    box-sizing: border-box;
    margin-left: ${APP_MARGINS.PC.HORIZON}px;
    padding-left: ${APP_MARGINS.PC.HORIZON}px;
    padding-top: ${APP_MARGINS.PC.VERTICAL}px;
    width: ${RIGHT_COL_WIDTH - APP_MARGINS.PC.HORIZON}px;
  }

  ${APP_BREAKPOINTS.SP} {
    display: none;
  }
`

const RightColInner = styled.div`
  ${APP_BREAKPOINTS.PC} {
    position: sticky;
    top: ${64 - APP_MARGINS.PC.VERTICAL}px;
  }
`

const GalleryLengthWrapper = styled.div`
  margin-bottom: ${spacing(1)}px;
`

const DividerWrapper = styled.div`
  margin-bottom: ${spacing(2)}px;
`

const ConditionItems = styled.div`
  div {
    & + div {
      margin-top: ${spacing(2)}px;

      &:last-child {
        margin-top: ${spacing(7)}px;
      }
    }
  }
`

export default MainContent
