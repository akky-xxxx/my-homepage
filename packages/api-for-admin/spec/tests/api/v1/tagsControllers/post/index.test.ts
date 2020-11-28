// import node_modules
import supertest from "supertest"

// import others
import { server } from "@@/modules/server"
import { PostTagsResponse } from "@@/shared/types/api/v1/tags"

// main
const request = supertest(server)
describe("app test `POST:/api/v1/tags`", () => {
  it("return 201 and correct property when tagName is string", async () => {
    const responseData: PostTagsResponse["data"] = {
      result: "success",
    }

    await request
      .post("/api/v1/tags")
      .send({
        tagNames: `test：${new Date().toString()}`,
      })
      .expect(201)
      .then((res) => {
        const { data } = res.body
        expect(typeof data).toEqual("object")
        expect(data).toEqual(responseData)
      })
  })

  it("return 201 and correct property when tagName is array of string", async () => {
    const responseData: PostTagsResponse["data"] = {
      result: "success",
    }

    await request
      .post("/api/v1/tags")
      .send({
        tagNames: [`test：${new Date().toString()}`],
      })
      .expect(201)
      .then((res) => {
        const { data } = res.body
        expect(typeof data).toEqual("object")
        expect(data).toEqual(responseData)
      })
  })

  it("return 400 when not have request body", async () => {
    await request.post("/api/v1/tags").expect(400)
  })
})
