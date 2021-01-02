// import node_modules
import supertest from "supertest"
import { AnyObject } from "shared-items"

// import others
import { server } from "@@/modules/server"

// main
const request = supertest(server)

describe("app test `GET:/api/v1/prefectures`", () => {
  it("return 200 and correct property", async () => {
    const res = await request.get("/api/v1/prefectures").expect(200)

    const { data } = res.body
    expect(typeof data).toEqual("object")
    expect(Array.isArray(res.body.data?.prefectures)).toEqual(true)

    res.body.data.prefectures.forEach((prefecture: AnyObject) => {
      expect(typeof prefecture).toEqual("object")
      // correct fetch
      expect(typeof prefecture.prefectureCode).toEqual("string")
      expect(typeof prefecture.prefectureName).toEqual("string")
    })
  })
})
