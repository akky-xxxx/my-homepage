// import node_modules
import supertest from "supertest"

// import others
import { server } from "@modules/server"

// main
const request = supertest(server)
describe("app test `/api/v1/sample`", () => {
  it("return 200 and correct message", async () => {
    await request
      .get("/api/v1/sample")
      .expect(200)
      .expect({ data: { resBodyTest: "{}" } })
  })
})
