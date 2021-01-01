// import node_modules
import supertest from "supertest"
import { AnyObject } from "shared-items"

// import others
import { server } from "@@/modules/server"

// main
const request = supertest(server)
const dateTimeRegExp = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/

describe("app test `GET:/api/v1/tags`", () => {
  it("return 200 and correct property", async () => {
    await request
      .get("/api/v1/tags")
      .expect(200)
      .then((res) => {
        const { data } = res.body
        expect(typeof data).toEqual("object")
        expect(Array.isArray(res.body.data?.tags)).toEqual(true)

        if (res.body.data.tags.length === 0) return

        res.body.data.tags.forEach((tag: AnyObject) => {
          expect(typeof tag).toEqual("object")
          // correct fetch
          expect(typeof tag.tagId).toEqual("string")
          expect(typeof tag.tagName).toEqual("string")
          expect(typeof tag.isRelease).toEqual("boolean")
          expect(tag.settingCount).toBeGreaterThanOrEqual(0)
          expect(tag.createdAt).toMatch(dateTimeRegExp)
          expect(tag.updatedAt).toMatch(dateTimeRegExp)

          // over fetch
          expect(tag.settingImages).toEqual(undefined)
        })
      })
  })
})
