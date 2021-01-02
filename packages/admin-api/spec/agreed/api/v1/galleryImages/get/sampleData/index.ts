// import
import { GetGalleryImage } from "@@/shared/types/api/v1/galleryImages"
import { sampleTags } from "../../../tags/get/sampleData"
import { prefectures } from "../../../prefectures/get/sampleData"

// main
export const images: GetGalleryImage[] = [
  {
    imageId: "imageId1",
    isRelease: false,
    prefectureId: null,
    tagIds: [],
    photographAt: null,
    createdAt: "2020-01-01 00:00:00",
    updatedAt: "2020-12-31: 23:59:59",
  },
  {
    imageId: "imageId1",
    isRelease: false,
    prefectureId: prefectures[0].prefectureCode,
    tagIds: [sampleTags[0].tagId, sampleTags[1].tagId],
    photographAt: null,
    createdAt: "2020-01-01 00:00:00",
    updatedAt: "2020-12-31: 23:59:59",
  },
]
