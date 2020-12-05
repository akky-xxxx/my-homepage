// import
import { createErrorData } from "./index"

// main
describe("createErrorData", () => {
  describe("定義されてる status が渡された時", () => {
    it("渡す filePath と返ってくる filePath は同値", () => {
      const filePath = __filename
      expect(createErrorData(filePath, 400)?.filePath).toEqual(filePath)
    })

    it.each([
      [400, "パラメータが不正です"],
      [404, "資材が見つかりません"],
    ] as const)("%i 時のエラーメッセージは `%s`", (input, output) => {
      expect(createErrorData(__filename, input)?.message).toEqual(output)
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
