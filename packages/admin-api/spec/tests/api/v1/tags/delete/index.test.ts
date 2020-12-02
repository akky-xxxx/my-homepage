// import node_modules
import supertest from "supertest"

// import others
import { server } from "@@/modules/server"
import { DeleteTagsResponse } from "@@/shared/types/api/v1/tags"
import { insertTestRecord } from "../modules/dataStore"

// main
const responseData: DeleteTagsResponse["data"] = {
  result: "success",
}
const TAG_NAME = "delete-test"
const request = supertest(server)
describe("app test `DELETE:/api/v1/tags`", () => {
  it("return 200 when correct query", async () => {
    const tagName = `${TAG_NAME}-1`
    const tagIds = await insertTestRecord(tagName)
    await request
      .delete("/api/v1/tags")
      .query({ tagIds })
      .expect(200)
      .then((res) => {
        const { data } = res.body
        expect(typeof data).toEqual("object")
        expect(data).toEqual(responseData)
      })
  })

  it("return 400 when no query", async () => {
    await request.delete("/api/v1/tags").expect(400)
  })
})
