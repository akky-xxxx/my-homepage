// import node_modules
import supertest from "supertest"
import dotenv from "dotenv"

// import others
import { server } from "@@/modules/server"

// main
dotenv.config()

const googleId = process.env.TEST_PERMISSION_USER

const request = supertest(server)
describe("app test `GET:/api/v1/auth/user`", () => {
  it("return 200 when has permission user", async () => {
    await request
      .get("/api/v1/auth/user")
      .query({ googleId })
      .expect(200)
      .then((res) => {
        const { result } = res.body
        expect(result).toEqual(true)
      })
  })

  it("return 403 when not has permission user", async () => {
    await request
      .get("/api/v1/auth/user")
      .query({ googleId: "test-user@gmail.com" })
      .expect(403)
  })
})
