// import node_modules
import supertest from "supertest"

// import others
import { server } from "@@/modules/server"
import { PostTagsResponse } from "@@/shared/types/api/v1/tags"
import { insertTestRecord, removeTestRecords } from "../modules/dataStore"

// main
const responseData: PostTagsResponse["data"] = {
  result: "success",
}
const TAG_NAME = "put-test"
const request = supertest(server)

describe("app test `PUT:/api/v1/tags`", () => {
  it("return 200 when correct request body has tagId, tagName, isRelease", async () => {
    const idList = await insertTestRecord(TAG_NAME)
    const tagName = `${TAG_NAME}-1`
    const tags = idList.map((tagId) => ({
      tagId,
      tagName,
      isRelease: true,
    }))

    await request
      .put("/api/v1/tags")
      .send({ tags })
      .expect(200)
      .then((res) => {
        const { data } = res.body
        expect(typeof data).toEqual("object")
        expect(data).toEqual(responseData)
      })
    await removeTestRecords(tagName)
  })

  it("return 200 when correct request body has tagId, tagName", async () => {
    const idList = await insertTestRecord(TAG_NAME)
    const tagName = `${TAG_NAME}-2`
    const tags = idList.map((tagId) => ({
      tagId,
      tagName,
    }))

    await request
      .put("/api/v1/tags")
      .send({ tags })
      .expect(200)
      .then((res) => {
        const { data } = res.body
        expect(typeof data).toEqual("object")
        expect(data).toEqual(responseData)
      })
    await removeTestRecords(tagName)
  })

  it("return 200 when correct request body has tagId, isRelease", async () => {
    const idList = await insertTestRecord(TAG_NAME)
    const tags = idList.map((tagId) => ({
      tagId,
      isRelease: true,
    }))

    await request
      .put("/api/v1/tags")
      .send({ tags })
      .expect(200)
      .then((res) => {
        const { data } = res.body
        expect(typeof data).toEqual("object")
        expect(data).toEqual(responseData)
      })
    await removeTestRecords(TAG_NAME)
  })

  it("return 400 when not have request body", async () => {
    await request.put("/api/v1/tags").expect(400)
  })

  it("return 400 when not have tagId in request body", async () => {
    const tagName = `${TAG_NAME}-4`
    const idList = await insertTestRecord(TAG_NAME)
    const tags = idList.map(() => ({
      tagName,
      isRelease: true,
    }))

    await request.put("/api/v1/tags").send({ tags }).expect(400)
    await removeTestRecords(TAG_NAME)
  })
})
