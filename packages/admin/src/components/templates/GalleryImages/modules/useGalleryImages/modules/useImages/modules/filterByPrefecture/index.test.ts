// import
import { filterByPrefecture } from "./index"

// main
describe("filterByPrefecture", () => {
  it("親の selectedPrefecture が null の場合は true を返す", () => {
    const childSelectedPrefecture = {
      label: "parentLabel",
      value: "parentValue",
    }
    const filterByPrefectureMain = filterByPrefecture(null)
    expect(
      filterByPrefectureMain({ selectedPrefecture: childSelectedPrefecture }),
    ).toEqual(true)
  })

  it("子の selectedPrefecture が null の場合は false を返す", () => {
    const parentSelectedPrefecture = {
      label: "parentLabel",
      value: "parentValue",
    }
    const filterByPrefectureMain = filterByPrefecture(parentSelectedPrefecture)
    expect(filterByPrefectureMain({ selectedPrefecture: null })).toEqual(false)
  })

  it("親と子の selectedPrefecture.value が同一の場合は true を返す", () => {
    const selectedPrefecture = {
      label: "parentLabel",
      value: "parentValue",
    }
    const filterByPrefectureMain = filterByPrefecture(selectedPrefecture)
    expect(filterByPrefectureMain({ selectedPrefecture })).toEqual(true)
  })

  it("親と子の selectedPrefecture.value が異なる場合は false を返す", () => {
    const selectedPrefecture1 = {
      label: "parentLabel1",
      value: "parentValue1",
    }
    const selectedPrefecture2 = {
      label: "parentLabel2",
      value: "parentValue2",
    }
    const filterByPrefectureMain = filterByPrefecture(selectedPrefecture1)
    expect(
      filterByPrefectureMain({ selectedPrefecture: selectedPrefecture2 }),
    ).toEqual(false)
  })
})
