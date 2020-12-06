// import
import { removeUndefinedKeys } from "./index"

// main
describe("removeUndefinedKeys", () => {
  it("値が undefined の key を削除したオブジェクトを返す", () => {
    const data = {
      foo: null,
      bar: undefined,
      baz: "test",
    }

    const expected = {
      foo: null,
      baz: "test",
    }

    expect(removeUndefinedKeys(data)).toStrictEqual(expected)
  })
})
