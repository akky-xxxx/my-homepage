// import
import { createErrorData } from "./index"

// main
describe("createErrorData", () => {
  describe("定義されてる status が渡された時", () => {
    it("渡す filePath と返ってくる filePath は同値", () => {
      const filePath = __filename
      expect(createErrorData(filePath, 400)?.filePath).toEqual(filePath)
    })

    it("400 時のエラーメッセージは「パラメータが不正です」", () => {
      expect(createErrorData(__filename, 400)?.message).toEqual(
        "パラメータが不正です",
      )
    })

    it("404 時のエラーメッセージは「資材が見つかりません」", () => {
      expect(createErrorData(__filename, 404)?.message).toEqual(
        "資材が見つかりません",
      )
    })
  })

  describe("undefined を返すパターン", () => {
    it("未定義 status が渡された時", () => {
      expect(createErrorData(__filename, 0)).toEqual(undefined)
    })

    it("status 未定義時", () => {
      expect(createErrorData(__filename, 0)).toEqual(undefined)
    })
  })
})
