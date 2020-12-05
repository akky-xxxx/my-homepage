// import
import { ThisError } from "./index"

// main
describe("ThisError", () => {
  it("引数なしの時、インスタンスは初期値", () => {
    const thisError = new ThisError()
    expect(thisError.status).toEqual(500)
    expect(thisError.message).toEqual("Internal Server Error")
    expect(thisError.stack).toEqual(undefined)
    expect(thisError.filePath).toEqual(undefined)
  })

  it("引数が error 以外ある時、インスタンスは引数の値", () => {
    const thisError = new ThisError({
      status: 400,
      message: "test message",
      stack: "test stack",
      filePath: __filename,
    })
    expect(thisError.status).toEqual(400)
    expect(thisError.message).toEqual("test message")
    expect(thisError.stack).toEqual("test stack")
    expect(thisError.filePath).toEqual(
      "src/common/utils/ThisError/index.test.ts",
    )
  })

  it("引数が error だけの時、インスタンスは error の値", () => {
    const thisError1 = new ThisError({
      status: 400,
      message: "test message",
      stack: "test stack",
      filePath: __filename,
    })
    const thisError2 = new ThisError({ error: thisError1 })
    expect(thisError2.status).toEqual(400)
    expect(thisError2.message).toEqual("test message")
    expect(thisError2.stack).toEqual("test stack")
    expect(thisError2.filePath).toEqual(
      "src/common/utils/ThisError/index.test.ts",
    )
  })

  it("引数がすべてある時、インスタンスは error の値", () => {
    const thisError1 = new ThisError({
      status: 401,
      message: "test message1",
      stack: "test stack1",
      filePath: __filename,
    })
    const thisError2 = new ThisError({
      status: 402,
      message: "test message2",
      stack: "test stack2",
      filePath: `${__filename}2`,
      error: thisError1,
    })
    expect(thisError2.status).toEqual(401)
    expect(thisError2.message).toEqual("test message1")
    expect(thisError2.stack).toEqual("test stack1")
    expect(thisError2.filePath).toEqual(
      "src/common/utils/ThisError/index.test.ts",
    )
  })
})
