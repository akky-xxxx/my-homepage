// import node_modules
import supertest from "supertest"
import dotenv from "dotenv"
import { ThisError } from "shared-items"

// import others
import { server } from "@@/modules/server"

// main
dotenv.config()

const googleId = process.env.TEST_PERMISSION_USER

if (!googleId) {
  throw new ThisError({
    filePath: __filename,
    message: "TEST_PERMISSION_USER がありません",
  })
}

const request = supertest(server)
describe("app test `GET:/api/v1/auth/user`", () => {
  it("return 200 when has google id of permission user", async () => {
    await request
      .get("/api/v1/auth/user")
      .query({ googleId })
      .expect(200)
      .then((res) => {
        const { data } = res.body
        expect(data).toEqual({ result: "success" })
      })
  })

  it("return 400 when not has param", async () => {
    await request.get("/api/v1/auth/user").expect(400)
  })

  it("return 403 when not has permission user", async () => {
    await request
      .get("/api/v1/auth/user")
      .query({ googleId: "test-user@gmail.com" })
      .expect(403)
  })
})
