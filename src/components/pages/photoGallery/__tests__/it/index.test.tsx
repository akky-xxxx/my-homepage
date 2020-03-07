/* eslint-disable react/jsx-props-no-spreading */
/**
 * import node_modules
 */
import React from "react"
import { mount } from "enzyme"
import "matchmedia-polyfill"

/**
 * import components
 */
import PhotoGallery, { PhotoGalleryProps } from "../../index"
import GalleryLength from "../../components/galleryLength"
import PrefSelect from "../../components/prefSelect"
import TagSelect from "../../components/tagSelect"

/**
 * import others
 */
import galleryInfoList from "../../../../../shared/const/galleryInfoList"
import { GalleryItem } from "../../../../../shared/types/pages/galleryList"

/**
 * main
 */
const props: PhotoGalleryProps = {
  modal: {
    isOpen: false,
    currentImageId: null,
  },
  selectedViewPref: "00",
  selectedViewTags: [],
  handleOpenModal: jest.fn(),
  handleCloseModal: jest.fn(),
  handleSelectViewPref: jest.fn(),
  handleResetViewPref: jest.fn(),
  handleSelectViewTag: jest.fn(),
  handleResetViewTag: jest.fn(),
}

const kanagawaPrefCode = "14"
const testTags = ["池", "紅葉"]
const filterByPref = (galleryInfo: GalleryItem) => galleryInfo.prefCode === kanagawaPrefCode
const filterByTag = (galleryInfo: GalleryItem) => testTags.every(targetTag => galleryInfo.tags.includes(targetTag))

describe("Photo Gallery", () => {
  describe("右カラム", () => {
    it(`条件未選択時が件数が「${galleryInfoList.length}件」であり、地域・タグが「未選択」であること`, () => {
      const photoGallery = mount(<PhotoGallery {...props} />)

      expect(photoGallery.find(GalleryLength).text()).toEqual(`${galleryInfoList.length}件`)
      expect(photoGallery.find(PrefSelect).text()).toEqual("地域全て")
      expect(
        photoGallery
          .find(TagSelect)
          .text()
          .includes("タグ"),
      ).toBe(true)
    })

    const filteredByKanagawa = galleryInfoList.filter(filterByPref)
    it(`神奈川選択時の件数が「${filteredByKanagawa.length}件」であり、地域は「神奈川県」が選択されて、タグが「未選択」であること`, () => {
      const photoGallery = mount(<PhotoGallery {...props} />)
      photoGallery.setProps({ selectedViewPref: kanagawaPrefCode })

      expect(photoGallery.find(GalleryLength).text()).toEqual(`${filteredByKanagawa.length}件`)
      expect(photoGallery.find(PrefSelect).text()).toEqual("地域神奈川県")
      expect(
        photoGallery
          .find(TagSelect)
          .text()
          .includes("タグ"),
      ).toBe(true)
    })

    const filteredByTags = galleryInfoList.filter(filterByTag)
    it(`池, 紅葉選択時の件数が「${filteredByTags.length}件」であり、地域が「未選択」、タグが「池、紅葉」が選択されていること`, () => {
      const photoGallery = mount(<PhotoGallery {...props} />)
      photoGallery.setProps({ selectedViewTags: testTags })

      expect(photoGallery.find(GalleryLength).text()).toEqual(`${filteredByTags.length}件`)
      expect(photoGallery.find(PrefSelect).text()).toEqual("地域全て")
      expect(photoGallery.find(TagSelect).text()).toEqual("タグ池, 紅葉")
    })

    const filterByPrefTags = galleryInfoList.filter(filterByPref).filter(filterByTag)
    it(`神奈川県, 池, 紅葉選択時の件数が「${filterByPrefTags.length}件」であり、地域が「神奈川県」、タグが「池、紅葉」が選択されていること`, () => {
      const photoGallery = mount(<PhotoGallery {...props} />)
      photoGallery.setProps({
        selectedViewPref: kanagawaPrefCode,
        selectedViewTags: testTags,
      })

      expect(photoGallery.find(GalleryLength).text()).toEqual(`${filterByPrefTags.length}件`)
      expect(photoGallery.find(PrefSelect).text()).toEqual("地域神奈川県")
      expect(photoGallery.find(TagSelect).text()).toEqual("タグ池, 紅葉")
    })
  })
})
