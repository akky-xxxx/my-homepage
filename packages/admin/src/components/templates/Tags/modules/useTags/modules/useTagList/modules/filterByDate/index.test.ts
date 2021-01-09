// import
import { filterByDate } from "./index"

// main
describe("filterByDate", () => {
  const tag = {
    tagId: "tagId1",
    isSelect: true,
    tagName: "tag1",
    isRelease: true,
    settingCount: 0,
    createdAt: "2020-01-01 00:00:00",
    updatedAt: "2020-12-31 23:59:59",
  }

  describe("true を返すパターン", () => {
    const expectedResult = true

    describe("start, end が null の場合", () => {
      const props = {
        start: null,
        end: null,
      }

      it.each([["createdAt"], ["updatedAt"]] as const)("%s", (targetType) => {
        expect(filterByDate({ ...props, targetType })(tag)).toEqual(
          expectedResult,
        )
      })
    })

    describe("start <= target, end = null の時", () => {
      const props = {
        end: null,
      }

      it.each([
        ["createdAt", "2019-12-31 00:00:00"],
        ["createdAt", "2019-12-31 23:59:59"],
        ["createdAt", "2020-01-01 00:00:00"],
        ["createdAt", "2020-01-01 23:59:59"],
        ["updatedAt", "2020-12-30 00:00:00"],
        ["updatedAt", "2020-12-30 23:59:59"],
        ["updatedAt", "2020-12-31 00:00:00"],
        ["updatedAt", "2020-12-31 23:59:59"],
      ] as const)("%s, %s", (targetType, startString) => {
        const start = new Date(startString)
        expect(filterByDate({ ...props, targetType, start })(tag)).toEqual(
          expectedResult,
        )
      })
    })

    describe("start = null, end <= target の時", () => {
      const props = {
        start: null,
      }

      it.each([
        ["createdAt", "2020-01-02 00:00:00"],
        ["createdAt", "2020-01-02 23:59:59"],
        ["createdAt", "2020-01-01 00:00:00"],
        ["createdAt", "2020-01-01 23:59:59"],
        ["updatedAt", "2020-12-31 00:00:00"],
        ["updatedAt", "2020-12-31 23:59:59"],
        ["updatedAt", "2021-01-01 00:00:00"],
        ["updatedAt", "2021-01-01 23:59:59"],
      ] as const)("%s, %s", (targetType, endString) => {
        const end = new Date(endString)
        expect(filterByDate({ ...props, targetType, end })(tag)).toEqual(
          expectedResult,
        )
      })
    })
  })

  describe("false を返すパターン", () => {
    const expectedResult = false

    describe("start > target, end = null の時", () => {
      const props = {
        end: null,
      }

      it.each([
        ["createdAt", "2020-01-02 00:00:00"],
        ["createdAt", "2020-01-02 23:59:59"],
        ["updatedAt", "2021-01-01 00:00:00"],
        ["updatedAt", "2021-01-01 23:59:59"],
      ] as const)("%s, %s", (targetType, startString) => {
        const start = new Date(startString)
        expect(filterByDate({ ...props, targetType, start })(tag)).toEqual(
          expectedResult,
        )
      })
    })

    describe("start = null, end < target の時", () => {
      const props = {
        start: null,
      }

      it.each([
        ["createdAt", "2019-12-31 00:00:00"],
        ["createdAt", "2019-12-31 23:59:59"],
        ["updatedAt", "2020-12-30 00:00:00"],
        ["updatedAt", "2020-12-30 23:59:59"],
      ] as const)("%s, %s", (targetType, endString) => {
        const end = new Date(endString)
        expect(filterByDate({ ...props, targetType, end })(tag)).toEqual(
          expectedResult,
        )
      })
    })
  })
})
