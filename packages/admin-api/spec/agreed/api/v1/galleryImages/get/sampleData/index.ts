// import
import { GetGalleryImage } from "@@/shared/types/api/v1/galleryImages"
import { sampleTags } from "../../../tags/get/sampleData"

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
    // TODO: GET prefecture 実装後、ダミーデータの id と差し替え
    prefectureId: "prefectureId1",
    tagIds: [sampleTags[0].tagId, sampleTags[1].tagId],
    photographAt: null,
    createdAt: "2020-01-01 00:00:00",
    updatedAt: "2020-12-31: 23:59:59",
  },
]
