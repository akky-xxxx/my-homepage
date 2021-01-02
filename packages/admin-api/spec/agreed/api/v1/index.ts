// import
import { galleryImages } from "./galleryImages"
import { prefectures } from "./prefectures"
import { tags } from "./tags"
import { authUser } from "./authUser"

// main
export const v1 = [...galleryImages, ...prefectures, ...tags, ...authUser]
