// import
import { filterByDate } from "./index"

// main
describe("filterByDate", () => {
  describe("photographAt がない場合", () => {
    const image = {
      photographAt: null,
      createdAt: "2020-01-01 00:00:00",
      updatedAt: "2020-12-31 23:59:59",
    }

    const expectedResult = false
    const props = {
      start: null,
      end: null,
    }

    it.each([
      ["photographAt", "2020-01-02 00:00:00"],
      ["photographAt", "2020-01-02 23:59:59"],
    ] as const)("%s, %s", (targetType, startString) => {
      const start = new Date(startString)
      expect(filterByDate({ ...props, targetType, start })(image)).toEqual(
        expectedResult,
      )
    })

    it.each([
      ["photographAt", "2019-12-31 00:00:00"],
      ["photographAt", "2019-12-31 23:59:59"],
    ] as const)("%s, %s", (targetType, endString) => {
      const end = new Date(endString)
      expect(filterByDate({ ...props, targetType, end })(image)).toEqual(
        expectedResult,
      )
    })

    it.each([
      ["photographAt", "2019-12-31 00:00:00"],
      ["photographAt", "2019-12-31 23:59:59"],
      ["photographAt", "2020-01-01 00:00:00"],
      ["photographAt", "2020-01-01 23:59:59"],
    ] as const)("%s, %s", (targetType, startString) => {
      const start = new Date(startString)
      expect(filterByDate({ ...props, targetType, start })(image)).toEqual(
        expectedResult,
      )
    })

    it.each([
      ["photographAt", "2020-01-02 00:00:00"],
      ["photographAt", "2020-01-02 23:59:59"],
      ["photographAt", "2020-01-01 00:00:00"],
      ["photographAt", "2020-01-01 23:59:59"],
    ] as const)("%s, %s", (targetType, endString) => {
      const end = new Date(endString)
      expect(filterByDate({ ...props, targetType, end })(image)).toEqual(
        expectedResult,
      )
    })
  })

  describe("photographAt がある場合", () => {
    const image = {
      photographAt: "2020-01-01 00:00:00",
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
          expect(filterByDate({ ...props, targetType })(image)).toEqual(
            expectedResult,
          )
        })
      })

      describe("start <= target, end = null の時", () => {
        const props = {
          end: null,
        }

        it.each([
          ["photographAt", "2019-12-31 00:00:00"],
          ["photographAt", "2019-12-31 23:59:59"],
          ["photographAt", "2020-01-01 00:00:00"],
          ["photographAt", "2020-01-01 23:59:59"],
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
          expect(filterByDate({ ...props, targetType, start })(image)).toEqual(
            expectedResult,
          )
        })
      })

      describe("start = null, end <= target の時", () => {
        const props = {
          start: null,
        }

        it.each([
          ["photographAt", "2020-01-02 00:00:00"],
          ["photographAt", "2020-01-02 23:59:59"],
          ["photographAt", "2020-01-01 00:00:00"],
          ["photographAt", "2020-01-01 23:59:59"],
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
          expect(filterByDate({ ...props, targetType, end })(image)).toEqual(
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
          ["photographAt", "2020-01-02 00:00:00"],
          ["photographAt", "2020-01-02 23:59:59"],
          ["createdAt", "2020-01-02 00:00:00"],
          ["createdAt", "2020-01-02 23:59:59"],
          ["updatedAt", "2021-01-01 00:00:00"],
          ["updatedAt", "2021-01-01 23:59:59"],
        ] as const)("%s, %s", (targetType, startString) => {
          const start = new Date(startString)
          expect(filterByDate({ ...props, targetType, start })(image)).toEqual(
            expectedResult,
          )
        })
      })

      describe("start = null, end < target の時", () => {
        const props = {
          start: null,
        }

        it.each([
          ["photographAt", "2019-12-31 00:00:00"],
          ["photographAt", "2019-12-31 23:59:59"],
          ["createdAt", "2019-12-31 00:00:00"],
          ["createdAt", "2019-12-31 23:59:59"],
          ["updatedAt", "2020-12-30 00:00:00"],
          ["updatedAt", "2020-12-30 23:59:59"],
        ] as const)("%s, %s", (targetType, endString) => {
          const end = new Date(endString)
          expect(filterByDate({ ...props, targetType, end })(image)).toEqual(
            expectedResult,
          )
        })
      })
    })
  })
})
