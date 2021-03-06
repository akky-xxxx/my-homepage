// import node_modules
import React, { FC, memo } from "react"
import styled from "styled-components"
import Select from "react-select"
import ReactDatePicker from "react-datepicker"
import { format } from "date-fns"
import {
  Color,
  Margin,
  Font,
  PickerWrapper,
  Button,
  DateFns,
  CheckMark,
} from "shared-items/dist/client"

// import components
import { Input } from "@@/components/atoms/Input"

// import others
import { GalleryImageProps } from "./types"
import { useGalleryImage } from "./modules/useGalleryImage"

// main
const {
  FORMAT: { DATETIME_SLASH },
} = DateFns
const { COLOR_FFFFFF, SECONDARY_TEXT } = Color
const {
  SIZE: { SMALL },
} = Font
const { MARGIN10 } = Margin
export const ITEM_WIDTH = 350

export const GalleryImage: FC<GalleryImageProps> = memo((props) => {
  const {
    imagePath,
    isRelease,
    prefectures,
    selectedPrefecture,
    tags,
    selectedTags,
    photographAt,
    createdAt,
    updatedAt,
    handleSelectPhotographAt,
    handleSelectPrefecture,
    handleSelectTags,
  } = props
  const {
    handleClickPrimary,
    handleClickRemove,
    handleClickRelease,
  } = useGalleryImage(props)

  return (
    <Wrapper>
      <Header>
        <CheckMark isChecked={isRelease} onClick={handleClickRelease} />

        {createdAt && updatedAt && (
          <Dates>
            <div>登録日：{format(new Date(createdAt), DATETIME_SLASH)}</div>
            <div>更新日：{format(new Date(updatedAt), DATETIME_SLASH)}</div>
          </Dates>
        )}
      </Header>

      <Image src={imagePath} alt="" width={ITEM_WIDTH} />

      <ImageInfo>
        <TwoContents>
          <MemoSelect
            value={selectedPrefecture}
            options={prefectures}
            placeholder="都道府県"
            onChange={handleSelectPrefecture}
          />

          <ReactDatePicker
            selected={photographAt ? new Date(photographAt) : undefined}
            onChange={handleSelectPhotographAt}
            dateFormat="yyyy/MM/dd"
            placeholderText="撮影日"
            calendarContainer={PickerWrapper}
            customInput={<PhotographAtInput />}
            isClearable
          />
        </TwoContents>

        <InfoWrapper>
          <MemoSelect
            placeholder="タグを選択"
            value={selectedTags}
            options={tags}
            onChange={handleSelectTags}
            isMulti
          />
        </InfoWrapper>

        <InfoWrapper>
          <TwoContents>
            <Button colorType="primary" onClick={handleClickPrimary}>
              {createdAt && updatedAt ? "更新" : "登録"}
            </Button>
            <Button colorType="accent" onClick={handleClickRemove}>
              削除
            </Button>
          </TwoContents>
        </InfoWrapper>
      </ImageInfo>
    </Wrapper>
  )
})

const Wrapper = styled.li`
  list-style: none;
  width: ${ITEM_WIDTH}px;
`

const Header = styled.div`
  align-items: center;
  background-color: ${COLOR_FFFFFF};
  border-radius: 4px 4px 0 0;
  display: flex;
  justify-content: space-between;
  padding: ${MARGIN10}px;
`

const Dates = styled.div`
  color: ${SECONDARY_TEXT};
  font-size: ${SMALL};
  text-align: right;
`

const InfoWrapper = styled.div`
  margin-top: ${MARGIN10}px;
`

const Image = styled.img`
  height: ${ITEM_WIDTH / 1.5}px;
  max-width: ${ITEM_WIDTH}px;
  object-fit: cover;
  vertical-align: top;
  width: 100%;
`

const ImageInfo = styled.div`
  background-color: ${COLOR_FFFFFF};
  border-radius: 0 0 4px 4px;
  padding: ${MARGIN10}px;
`

const TwoContents = styled.div`
  display: grid;
  grid-column-gap: ${MARGIN10}px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(calc(50% - 5px), calc(50% - 5px))
  );
`

const PhotographAtInput = styled(Input)`
  width: 100%;
`

const MemoSelect = memo(Select)
