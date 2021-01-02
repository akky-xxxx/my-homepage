// import node_modules
import supertest from "supertest"
import { AnyObject } from "shared-items"

// import others
import { server } from "@@/modules/server"

// main
const request = supertest(server)
const dateTimeRegExp = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/

describe("app test `GET:/api/v1/gallery-images`", () => {
  it("return 200", async () => {
    await request
      .get("/api/v1/gallery-images")
      .expect(200)
      .then((res) => {
        const { data } = res.body
        expect(typeof data).toEqual("object")
        expect(Array.isArray(data.images)).toEqual(true)

        data.images.forEach((imageData: AnyObject) => {
          expect(typeof imageData).toEqual("object")

          expect(typeof imageData.imageId).toEqual("string")

          expect(typeof imageData.isRelease).toEqual("boolean")

          if (typeof imageData.prefectureId === "string") {
            expect(typeof imageData.prefectureId).toEqual("string")
          } else {
            expect(imageData.prefectureId).toEqual(null)
          }

          expect(Array.isArray(imageData.tags)).toEqual(true)
          ;(imageData.tags as unknown[]).forEach((tag: unknown) => {
            expect(typeof tag).toEqual("string")
            if (typeof tag === "string") {
              expect(dateTimeRegExp.test(tag)).toEqual("string")
            }
          })

          if (typeof imageData.photographAt === "string") {
            expect(typeof imageData.photographAt).toEqual("string")
          } else {
            expect(imageData.photographAt).toEqual(null)
          }

          expect(typeof imageData.createdAt).toEqual("string")
          if (typeof imageData.createdAt === "string") {
            expect(dateTimeRegExp.test(imageData.createdAt)).toEqual(true)
          }

          expect(typeof imageData.updatedAt).toEqual("string")
          if (typeof imageData.updatedAt === "string") {
            expect(dateTimeRegExp.test(imageData.updatedAt)).toEqual(true)
          }
        })
      })
  })
})
