// import
import { ReleaseStatuses } from "@@/components/templates/GalleryImages/const"
import { filterByReleaseStatus } from "./index"

// main
describe("filterByReleaseStatus", () => {
  describe("selectedReleaseStatus が null の場合、 true を返す", () => {
    const filterByReleaseStatusMain = filterByReleaseStatus(null)
    it.each([[true], [false]] as const)("isRelease は %s", (isRelease) => {
      expect(filterByReleaseStatusMain({ isRelease })).toEqual(true)
    })
  })

  it.each([
    ["0", true, false],
    ["0", false, true],
    [ReleaseStatuses[0].value, true, true],
    [ReleaseStatuses[0].value, false, false],
    [ReleaseStatuses[1].value, true, false],
    [ReleaseStatuses[1].value, false, true],
  ] as const)(
    "selectedReleaseStatus.value が %s, isRelease が %s の時、 %s を返す",
    (value, isRelease, expectedValue) => {
      const selectedReleaseStatus = { label: "", value }
      const filterByReleaseStatusMain = filterByReleaseStatus(
        selectedReleaseStatus,
      )
      expect(filterByReleaseStatusMain({ isRelease })).toEqual(expectedValue)
    },
  )
})
