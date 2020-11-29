// import node_modules
import supertest from "supertest"

// import others
import { server } from "@@/modules/server"

// main
const request = supertest(server)
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

        const tag = res.body.data.tags[0]
        expect(typeof tag.tagId).toEqual("string")
        expect(typeof tag.tagName).toEqual("string")
        expect(typeof tag.isRelease).toEqual("boolean")
        expect(tag.createdAt).toMatch(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/)
        expect(tag.updatedAt).toMatch(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/)
      })
  })
})
