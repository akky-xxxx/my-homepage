// import node_modules
import supertest from "supertest"

// import others
import { server } from "@@/modules/server"
import { PostGalleryImagesResponse } from "@@/shared/types/api/v1/galleryImages"

// main
const responseData: PostGalleryImagesResponse["data"] = {
  result: "success",
}
const request = supertest(server)

describe("app test `POST:/api/v1/gallery-images`", () => {
  it("return 200 when uploaded only images", async () => {
    await request
      .post("/api/v1/gallery-images")
      .expect(201)
      .then((res) => {
        const { data } = res.body
        expect(typeof data).toEqual("object")
        expect(data).toEqual(responseData)
      })
  })
})
